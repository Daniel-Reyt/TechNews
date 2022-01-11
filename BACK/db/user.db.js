const mysql = require('mysql');
var ip = require('ip');

var conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'tech'
});

// GET
async function getAllUsers() {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT * FROM users",
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

// POST
async function addUser(username, password, role) {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "INSERT INTO users (username, password, role) " +
                "VALUES (?, ?, ?)", [username, password, role],
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

async function banUser(id_user) {
    {
        return new Promise((resolve, reject) => {
            let result;
            // conn.query(
            //     "DELETE FROM chat WHERE id_user = ?", [id_user],
            //     (err, results) => {
            //         if (err) {
            //             reject(err);
            //         }
            //         result = results;
            //     }
            // );
            // conn.query(
            //     "DELETE FROM comments WHERE id_user = ?", [id_user],
            //     (err, results) => {
            //         if (err) {
            //             reject(err);
            //         }
            //         result = results;
            //     }
            // );
            // conn.query(
            //     "DELETE FROM news WHERE id_user = ?", [id_user],
            //     (err, results) => {
            //         if (err) {
            //             reject(err);
            //         }
            //         result = result + results;
            //     }
            // );
            conn.query(
                "INSERT INTO bannedip (ip) VALUES (?)", [ip.address()],
                (err, results) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    result = result + results;
                }
            );
            resolve(result);
        })
    }
}

// PUT
async function updateUser(id_user, username, password, role) {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "UPDATE users " +
                "SET username = ?, password = ?, role = ? " +
                "WHERE id_user = ?", [username, password, role, id_user],
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

// DELETE 
async function deleteUser(id_user) {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "DELETE FROM users " +
                "WHERE id_user = ?", [id_user],
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
    getAllUsers,

    addUser,
    banUser,

    updateUser,

    deleteUser
}