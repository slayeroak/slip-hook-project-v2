const express = require('express');
const router = express.Router();


// controllers
const { requireSignin, authMiddleware} = require('../controllers/auth');


// routes
router.post('/weather', requireSignin, authMiddleware);

module.exports = router;