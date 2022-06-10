const {connection} = require('../../database-mysql/index.js');
module.exports={
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

    createPost:((req,res)=>{
        console.log(req.body)
    console.log(req.body)
    const query=`INSERT INTO postes(title,namee,imageUrl,createdAt,body,video) VALUES("${req.body.title}","${req.body.namee}","${req.body.imageUrl}","${req.body.createdAt}","${req.body.body}","${req.body.video}")`
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  })

}
