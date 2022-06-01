const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const {routerAdmin } =require('./router')
const path = require('path');

const cors = require("cors");
const app = express();

app.use(cors({
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}))
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.set("port", 3333);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }),
);


app.use('/',routerAdmin)
// app.use('/team',router)
// app.use('/team', router)
// app.use('/post',router)
// app.use('/new',router)
// app.use('/admin',router)
// app.use('/login',router)
// app.listen(PORT, console.log(`Server started on port ${PORT}`));
module.exports = app