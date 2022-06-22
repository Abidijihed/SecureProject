const models = require('../models/session')
module.exports={
    CreateSession:((req,res,users_id,session)=>{
        models.post(users_id,session)
        .then((result)=>{
            res.cookie("secure",session,{
                path: '/',
                expires: new Date(new Date().getTime() + 86400 * 1000),
                httpOnly: false,
                secure: false
            }).send([session,"secsuss",users_id])
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
                        users_id:result[0].users_id,
                        session:result[0].session,
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
            res.status(200).send('session login fail')
        }
    }
}