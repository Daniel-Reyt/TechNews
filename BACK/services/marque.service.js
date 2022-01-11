const marqueDB = require('../db/marque.db')

async function addMarque(nom_marque, date_creation) {
    try {
        return await marqueDB.addMarque(nom_marque, date_creation);
    } catch (e) {
        console.log(e);
    }
}
async function getMarques() {
    try {
        return await marqueDB.getMarques();
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addMarque,
    getMarques
}