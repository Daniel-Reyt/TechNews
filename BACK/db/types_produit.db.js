const mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'tech'
});

async function addTypeProduits(nom) {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "INSERT INTO types_produit (nom) VALUES (?)", [nom],
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

async function getTypeProduits() {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT * FROM types_produit",
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
    addTypeProduits,
    getTypeProduits
}