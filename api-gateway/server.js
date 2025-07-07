const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());

// Pas de body-parser ici pour ne pas interférer avec le proxy

app.use('/auth', proxy(process.env.AUTH_SERVICE_URL, {
  proxyReqPathResolver: req => req.originalUrl.replace('/auth', ''),
  proxyErrorHandler: (err, res, next) => {
    console.error('[GATEWAY] Erreur proxy :', err.message);
    res.status(500).json({ error: 'Erreur proxy' });
  }
}));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Gateway lancé sur le port ' + PORT);
});
