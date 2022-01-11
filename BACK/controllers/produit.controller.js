let produitService = require('../services/produit.service');
// GET
async function getProduits(req, res, next) {
    try {
        let messages = await produitService.getProduits()
        res.json(messages);
    } catch (e) {
        console.log(e)
    }
}

//POST
async function addProduits(req, res, next) {
    try {
        let nom = req.body.nom;
        let description = req.body.description;
        let prix = req.body.prix;
        let id_marque = req.body.id_marque;
        let result = await produitService.addProduits(nom, description, prix, id_marque)
        res.json(result);
    } catch (e) {
        console.log(e)
    }
}
async function addProduitsWithType(req, res, next) {
    try {
        let nom = req.body.nom;
        let description = req.body.description;
        let prix = req.body.prix;
        let id_marque = req.body.id_marque;
        let id_type = req.body.id_type;
        let result = await produitService.addProduitsWithType(nom, description, prix, id_marque, id_type)
        res.json(result);
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getProduits,
    addProduitsWithType,
    addProduits
}