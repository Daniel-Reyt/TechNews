const typeProduitsService = require('../services/types_produit.service')

async function addTypeProduits(req, res, next) {
    try {
        let nom = req.body.nom;
        const object = await typeProduitsService.addTypeProduits(nom)
        res.json(object)
    } catch (e) {
        console.log(e);
    }
}
async function getTypeProduits(req, res, next) {
    try {
        const object = await typeProduitsService.getTypeProduits()
        res.send(object)
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    addTypeProduits,
    getTypeProduits
}