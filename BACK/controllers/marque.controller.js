const marqueService = require('../services/marque.service')

async function addMarque(req, res, next) {
    try {
        let nom_marque = req.body.nom;
        let date_creation = req.body.date_creation;
        const object = await marqueService.addMarque(nom_marque, date_creation)
        res.json(object)
    } catch (e) {
        console.log(e);
    }
}
async function getMarques(req, res, next) {
    try {
        const object = await marqueService.getMarques()
        res.send(object)
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    addMarque,
    getMarques
}