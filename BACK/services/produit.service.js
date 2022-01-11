let produitDB = require('../db/produit.db');
// GET
async function getProduits() {
    try {
        return await produitDB.getProduits();
    } catch (e) {
        console.log(e)
    }
}

async function addProduits(nom, description, prix, id_marque) {
    try {
        return await produitDB.addProduits(nom, description, prix, id_marque);
    } catch (e) {
        console.log(e)
    }
}
async function addProduitsWithType(nom, description, prix, id_marque, id_type) {
    try {
        return await produitDB.addProduitsWithType(nom, description, prix, id_marque, id_type);
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getProduits,
    addProduitsWithType,
    addProduits
}