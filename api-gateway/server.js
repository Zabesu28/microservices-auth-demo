const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());

// Proxy vers le microservice auth
app.use('/auth', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true,
  pathRewrite: { '^/auth': '' },
  logLevel: 'debug',
  onProxyReq: (proxyReq, req) => {
    // Important : reconstruire le body pour que le proxy le passe bien
    if (req.body) {
      const formData = new URLSearchParams(req.body).toString();
      proxyReq.setHeader('Content-Type', 'application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(formData));
      proxyReq.write(formData);
      proxyReq.end();
    }
  }
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway lancé sur le port ${PORT}`);
});
