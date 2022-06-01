const router= require("express").Router()
const controller= require('./controller.js')

router.post('/createuserse', controller.createUsers)
router.get('/getall',controller.getAll)
router.get('/getallpost',controller.getAllpost)
router.post('/createnewpost',controller.createPost)
router.post('/login',controller.getUser)

router.delete('/delete/:id',controller.delete)


// router.post('/admin',controller.createUser)
module.exports={routerAdmin:router}