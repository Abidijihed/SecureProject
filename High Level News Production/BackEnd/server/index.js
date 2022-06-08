const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('../database-mysql/index');
const {routerAdmin} =require('../server/routers/router');
const {postrouter} =require('../server/routers/postrouter');
const {routerUser} =require('../server/routers/usersrouter')
const path = require("path");




app.use(cookieParser())
app.use(cors({
  origin:'http://localhost:3000', 
  credentials:true,            
  optionSuccessStatus:200
}));

app.set('port',3333);
app.use(express.json());

app.use('/',routerAdmin)
app.use('/',postrouter)
app.use('/',routerUser)
module.exports = app