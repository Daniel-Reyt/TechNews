const express = require('express');
const router = express.Router();
const typeProduitsCtrl = require('../controllers/types_produit.controller');

// POST

router.post('/', typeProduitsCtrl.addTypeProduits);
router.get('/', typeProduitsCtrl.getTypeProduits);

module.exports = router;