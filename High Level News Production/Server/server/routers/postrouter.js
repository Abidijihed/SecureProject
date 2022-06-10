const router= require("express").Router()
const postemodels=require("../models/poste")


router.post('/api/createnewpost',postemodels.createPost)
router.get('/api/getallpost',postemodels.getAllpost)


module.exports={postrouter:router}