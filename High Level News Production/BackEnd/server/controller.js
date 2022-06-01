const {connection} = require('../database-mysql/index.js')
const crypto = require('crypto')

module.exports ={
  /** create new user */
  
    createUsers: (req,res)=>{
      console.log(req.body)
    const query = `INSERT INTO register(firstName,lastName,email,phone) VALUES("${req.body.firstName}","${req.body.lastName}","${req.body.email}","${req.body.phone}")`
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  //get the whole information of player to render them in the Admin page
  getAll: ((req,res)=>{
    const query ='select * from register'
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    
    })
  }),
  // get thh whole post and render them in the home page
getAllpost: ((req,res)=>{
    const query ='SELECT * FROM postes'
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    
    })
  }),
  // add some post to the page
  createPost:((req,res)=>{
    console.log(req.body)
    const query=`INSERT INTO postes(title,namee,imageUrl,createdAt,body,video) VALUES("${req.body.title}","${req.body.namee}","${req.body.imageUrl}","${req.body.createdAt}","${req.body.body}","${req.body.video}")`
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  }),
  createUser:((req,res)=>{
    console.log(req.body)
    //hashing password
    var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
    console.log(passwordHashed)
    const query=`INSERT INTO adminuser (password,email) VALUES("${passwordHashed}","${req.body.email}")`
    connection.query(query,(err,results)=>{
      if(err){
        console.log(err)
        res.send(err)
      }else{
        console.log(200)
        res.send(200)
      }
    })
  }),
  getUser :((req,res)=>{
    //compaire the pasword hashed for signup admin
    var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
    const query=`SELECT * from adminuser where email="${req.body.email}"`
    connection.query(query,(err,results)=>{
      if(err){
        console.log(err)
      }else if(results.length>0 && results[0].password===passwordHashed){
          res.status(200).send('success')
        }else{
          res.status(500).send('wrong password or email')
          
        }
    })
  }),
  //delete the information of player that he lost
  delete:((req,res)=>{
    const query=`DELETE FROM register WHERE id=${req.params.id}`
    connection.query(query,(err,results)=>{
      if(err){
        res.status(500).send(err)
      }else{
        res.status(200).send('deleted')
      }
    })
  })
}
