const typeProduitsDB = require('../db/types_produit.db')

async function addTypeProduits(nom) {
    try {
        return await typeProduitsDB.addTypeProduits(nom);
    } catch (e) {
        console.log(e);
    }
}
async function getTypeProduits() {
    try {
        return await typeProduitsDB.getTypeProduits();
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addTypeProduits,
    getTypeProduits
}