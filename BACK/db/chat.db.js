let mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'root',
    database: 'tech'
});
// GET
async function getAllMessages() {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT chat.message, chat.date_message, users.username, users.id_user FROM chat " +
                "INNER JOIN users ON chat.id_user = users.id_user " +
                "ORDER BY date_message DESC",
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

async function addMessage(id_user, message, date) {
    {
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO chat (id_user, message, date_message) VALUES (?, ?, ?)", [id_user, message, date],
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
    getAllMessages,

    addMessage
}