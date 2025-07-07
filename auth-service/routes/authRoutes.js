const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.use((req, res, next) => {
  console.log(`[AUTH SERVICE] Requête reçue : ${req.method} ${req.originalUrl}`);
  next();
});

module.exports = router;
