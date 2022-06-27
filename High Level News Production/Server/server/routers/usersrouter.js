const router= require("express").Router()
const usermodels=require('../models/user')
const middleware=require('../middleware/auth')

router.get('/api/getall',usermodels.getAll)
router.get('/api/getoneuser/:id',usermodels.getOneuser)
router.patch('/api/updateuser/:id',usermodels.Updateuser)
router.post('/api/user',usermodels.createUser)
router.post('/api/login',usermodels.VerifyUser)
router.get('/api/session',middleware.VerifySession)
router.get('/api/logout',usermodels.logout)



module.exports={routerUser:router}