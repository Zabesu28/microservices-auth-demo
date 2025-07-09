const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', verifyToken, authController.getUserInfoFromToken);

router.use((req, res, next) => {
  console.log(`[AUTH SERVICE] Requête reçue : ${req.method} ${req.originalUrl}`);
  next();
});

module.exports = router;
