const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Token manquant' });

    const response = await axios.get(`${process.env.AUTH_SERVICE_URL}/me`, {
      headers: { Authorization: authHeader }
    });

    console.log(response.data);

    if (response.data.role !== 'admin') {
      return res.status(403).json({ message: 'Accès refusé : admin requis' });
    }

    next();
  } catch (err) {
    console.error('[GATEWAY][adminMiddleware] Erreur :', err.message);
    res.status(403).json({ message: 'Accès interdit' });
  }
};