const express = require('express');
const router = express.Router();
const marqueCtrl = require('../controllers/marque.controller');

// POST

router.post('/add', marqueCtrl.addMarque);
router.get('/', marqueCtrl.getMarques);

module.exports = router;