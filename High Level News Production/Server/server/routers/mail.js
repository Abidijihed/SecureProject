const router= require("express").Router()
const mailsender=require("../models/mail")

router.post("/api/sendmail", mailsender.nodeMail);

module.exports ={mailrouter:router}