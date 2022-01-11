let mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'tech'
});
// GET
async function getProduits() {
    {
        return new Promise((resolve, reject) => {
            conn.query("SELECT produits.*, marques.nom AS marque_nom, types_produit.nom AS type_nom FROM produits INNER JOIN marques ON produits.id_marque = marques.id_marque INNER JOIN types_produit ON produits.id_type = types_produit.id_type",
                (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            )
        })
    }
}

async function addProduits(nom, description, prix, id_marque) {
    {
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO produits (nom, description, prix, id_marque) VALUES (?, ?, ?, ?)", [nom, description, prix, id_marque],
                (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            )
        })
    }
}

async function addProduitsWithType(nom, description, prix, id_marque, id_type) {
    {
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO produits (nom, description, prix, id_marque, id_type) VALUES (?, ?, ?, ?, ?)", [nom, description, prix, id_marque, id_type],
                (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            )
        })
    }
}
module.exports = {
    getProduits,
    addProduitsWithType,
    addProduits
}