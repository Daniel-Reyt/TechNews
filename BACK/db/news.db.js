let mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'root',
    database: 'tech'
});
// GET
async function getAllNews() {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT news.message, news.date, users.username FROM news " +
                "INNER JOIN users ON news.id_user = users.id_user",
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
    getAllNews,
}