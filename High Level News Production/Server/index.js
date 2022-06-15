const app = require("./server/index");
const port = app.get("port");
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
  })
);


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
