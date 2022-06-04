const {connection} = require('../../database-mysql/index.js');
const crypto = require('crypto');
const middleware = require('../middleware/auth');
const utils=require('../middleware/util')

module.exports = {
   createUser:((req,res)=>{
       console.log(req.body)
       var passwordHashed=crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
      var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.confirmPassword, 'utf8').digest('hex')
      const query=`INSERT INTO register(Firstname,Lastname,Email,Password,confirmPassword,PhoneNumber,image,country,State,Zip,Address) VALUES("${req.body.Firstname}","${req.body.Lastname}","${req.body.Email}","${passwordHashed}","${repeatepasswordHshed}","${req.body.PhoneNumber}","${req.body.image}","${req.body.country}","${req.body.State}","${req.body.Zip}","${req.body.Address}")`
      console.log(req.body)
       connection.query(query,(err,results)=>{
         if(err){
           console.log(err)
           res.send(err)
         }else{
           console.log(results)
           res.send(results)
         }
       })
   }),
   getOneuser :((req,res)=>{
         const query=`SELECT * from register where id=${req.params.id}`
    connection.query(query,(err,results)=>{
   err ? res.status(200).send(err) : res.status(200).send(results[0])
    
      })
  }),
  getAll:((req,res)=>{
    const query=`SELECT * FROM register`
    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err):res.status(200).send(result)
    })
  }),
  Updateuser : (register , id) => {
    var passwordHashed = crypto.createHash('sha256').update(register.Password, 'utf8').digest('hex')
       return new Promise((resolve,reject) => {
         connection.query(`UPDATE register SET Firstname=?, Lastname=?, Email=?, Password=?, confirmPassword="${passwordHashed}", PhoneNumber=?, image=?, Zip=?, Address=? WHERE id=?`,
       [register.Firstname,register.Lastname, register.Email,register.Password,passwordHashed,register.PhoneNumber,register.image,register.Zip,register.Address,id],(err,results)=>{
           err ? reject(err) : resolve(results)
         })
       })
  },
  VerifyUser :(req,res)=>{
    var passwordHashed = crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
    // var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.repeatepassword, 'utf8').digest('hex')
    const query=`SELECT * from register where Email="${req.body.Email}"`
    connection.query(query,(err,results)=>{
      if(err){
        console.log(err)
      }else if(results.length>0 && results[0].Password===passwordHashed ){
       var session=utils.RandomString(32)
        middleware.CreateSession(req,res,results[0].id,session)
      }else if(results.length===0 || results[0].Password!==passwordHashed ){
res.send("faill")
      }
    })
  },
  logout:(req,res)=>{
   session.delete(req.cookies.carrefour)
   .then((result)=>{
       res.redirect('/')
  })
   .catch((err)=>{
     res.status(500).send('server err')
   })
 
  }
}