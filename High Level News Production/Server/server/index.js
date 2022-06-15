const express = require("express");
const app = express();
// const cors = require('cors');
const cookieParser = require('cookie-parser');
// const db = require('../database-mysql/index');
// const nodemailer = require("nodemailer");
// const {routerAdmin} =require('./routers/router');
const {postrouter} =require('./routers/postrouter');
const {routerUser} =require('./routers/usersrouter')
// const path = require("path");
// const nodemailer = require('nodemailer');

require("dotenv").config();
const {mailrouter} =require('./routers/mail')

const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser())
app.set('port',3333);
app.use(express.json());

app.use('/',mailrouter)

app.use('/',postrouter)

app.use('/',routerUser)

module.exports = app