const mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'tech'
});

// POST
async function deleteComment(id_comment) {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "DELETE FROM comments WHERE id_comment = ?", [id_comment],
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
    deleteComment
}