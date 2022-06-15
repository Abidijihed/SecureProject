const controller = require('../models/user')




module.exports = {
    GetUser : (req,res)=>{
            controller.VerifyUser('', '' ,req.params.id)
            .then((result)=>{
                res.status(200).send({success:true, user:result[0]})
            })
            .catch((err)=>{
                console.log(err)
                res.status(500).send({success: false})
            })

    }
}