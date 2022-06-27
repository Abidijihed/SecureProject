const {connection} = require('../../database-mysql/index.js');
const crypto = require('crypto');
const middleware = require('../middleware/auth');
const utils=require('../middleware/util')
const session=require ('../models/session')

module.exports = {
   createUser:((req,res)=>{
       var passwordHashed=crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
      var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.confirmPassword, 'utf8').digest('hex')
      var query=`SELECT * from users where Email="${req.body.Email}"`
  connection.query(query,(err,results)=>{
    if(err){
      res.status(500).send(err)
    }else if((results.length>0 &&results[0].Email===req.body.Email)) {
      res.status(200).send("user exist")
    }else{
      var query=`INSERT INTO users(Firstname,Lastname,Email,Password,confirmPassword,PhoneNumber,image,country,State,Zip,Address) VALUES("${req.body.Firstname}","${req.body.Lastname}","${req.body.Email}","${passwordHashed}","${repeatepasswordHshed}","${req.body.PhoneNumber}","${req.body.image}","${req.body.country}","${req.body.State}","${req.body.Zip}","${req.body.Address}")`
      connection.query(query,(err,results)=>{
        if(err){
          res.status(500).send(err)
        }else{
          res.status(200).send("user created")

        }
      })
    }
       
      })
   }),
   getOneuser :((req,res)=>{
         const query=`SELECT * from users where id=${req.params.id}`
    connection.query(query,(err,results)=>{
   err ? res.status(200).send(err) : res.status(200).send(results[0])
    
      })
  }),
  getAll:((req,res)=>{
    const query=`SELECT * FROM users`
    connection.query(query,(err,result)=>{
      // console.log(result,'ttttttttt')
      err ? res.status(500).send(err):res.status(200).send(result)
    })
  }),
  Updateuser : (req,res,next) => {
    var id=req.params.id
    var updadata=req.body
    var passwordHashed = crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
         const query=`UPDATE users SET (Firstname=${req.body.Firstname}, Lastname=${req.body.Lastname}, Email=${req.body.Email}, Password=${passwordHashed}, PhoneNumber=${req.body.PhoneNumber}, image=${req.body.image}, Zip=${req.body.Zip}, Address=${req.body.Address}) WHERE id=${req.params.id}`
     connection.query(query,(err,result)=>{
         err ?res.status(500).send(err,'im the error'):res.status(200).send(result)
     })
          
         
       
  },
   VerifyUser :(req,res)=>{
    var passwordHashed = crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
    // var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.repeatepassword, 'utf8').digest('hex')
    const query=`SELECT * from users where Email="${req.body.Email}"`
    connection.query(query,(err,results)=>{
      if(err){
        res.status(500).send(err)
      } else if(results.length>0 && results[0].Password===passwordHashed ){
       var session=utils.RandomString(32)
        middleware.CreateSession(req,res,results[0].id,session)
      }else if(results.length===0 || results[0].Password!==passwordHashed  ){
             res.status(200).send('somthing went wrong')
      }else{
        res.status(404).send("not fund")
      }
    })
  },
  logout:(req,res)=>{
   session.delete(req.cookies.secure)
   .then((result)=>{
res.status(200).send('user loget out')      
  })
   .catch((err)=>{
     res.status(500).send('server err')
   })
 
  }
}