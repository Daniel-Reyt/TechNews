const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produit.controller');

// GET
router.get('/', produitController.getProduits);
// POST
router.post('/', produitController.addProduits);
router.post('/withType', produitController.addProduitsWithType);

module.exports = router;