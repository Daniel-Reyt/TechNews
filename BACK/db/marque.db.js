const mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'tech'
});

async function addMarque(nom_marque, date_creation) {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "INSERT INTO marques (nom, date_creation) " +
                "VALUES (?, ?)", [nom_marque, date_creation],
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

async function getMarques() {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT * FROM marques",
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
    addMarque,
    getMarques
}