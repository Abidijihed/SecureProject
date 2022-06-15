const router= require("express").Router()
const mailmodel=require("../models/mail")
router.post("/api/send",mailmodel.nodmail)
module.exports ={mailrouter:router}