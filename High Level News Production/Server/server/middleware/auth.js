const models = require('../models/session')
module.exports={
    CreateSession:((req,res,register_id,session)=>{
        models.post(register_id,session)
        .then((result)=>{
            console.log(session)
            res.cookie("secure",session,{
                path: '/',
                expires: new Date(new Date().getTime() + 86400 * 1000),
                httpOnly: false,
                secure: false
            }).send([session,"secsuss",register_id])
        })
        .catch((err)=>{
           res.send(err)
        })
    }),
    VerifySession:(req,res,next)=>{
        if(req.cookies.secure){
            models.Get(req.cookies.secure)
            .then((result)=>{
                if(result.length>0&&(result[0].date>Date.now())){
                    var registerInfo={
                        register_id:result[0].register_id,
                        FirstName:result[0].Firstname,
                        Email:result[0].Email
                    }
                    res.status(200).send(registerInfo)
                }else{
                    res.status(200).send('seesion login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send(err)
            })
        }else{
            res.status(200).session('session login fail')
        }
    }
}