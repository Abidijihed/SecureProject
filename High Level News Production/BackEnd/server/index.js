const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const db = require('../database-mysql/index');
const {routerAdmin} =require('../server/routers/router');
const { createProxyMiddleware } = require('http-proxy-middleware');



app.use(cookieParser())
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
  })
);
app.set('port',3333);
app.use(express.json());

app.use('/',routerAdmin)

module.exports = app