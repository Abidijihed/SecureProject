const router= require("express").Router()
const usermodels=require('../models/user')
// const postemodels=require("../models/poste")


router.post('/api/user',usermodels.createUser)
// const controller= require('./controller.js')

// router.post('/createuserse', controller.createUsers)
// router.get('/api/getall',usermodels.getAll)
// router.get('/getallpost',controller.getAllpost)
// router.post('/api/createnewpost',postemodels.createPost)
// router.post('/login',controller.getUser)

// router.delete('/delete/:id',controller.delete)


// router.post('/admin',controller.createUser)
module.exports={routerAdmin:router}