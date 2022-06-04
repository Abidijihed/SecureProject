const router= require("express").Router()
const usermodels=require('../models/user')


router.get('/api/getall',usermodels.getAll)


module.exports={routerUser:router}