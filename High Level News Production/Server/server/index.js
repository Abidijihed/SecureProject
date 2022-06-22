const express = require("express");
const app = express();

const cookieParser = require('cookie-parser');
const {postrouter} =require('./routers/postrouter');
const {routerUser} =require('./routers/usersrouter')

require("dotenv").config();
const {mailrouter} =require('./routers/mail')

const cors = require('cors');
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}));

app.use(cookieParser())
app.set('port',3333);
app.use(express.json());

app.use('/',mailrouter)

app.use('/',postrouter)

app.use('/',routerUser)

module.exports = app