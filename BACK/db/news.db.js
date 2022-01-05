let mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'tech'
});

// GET

async function getAllNews() {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT news.id_news, news.message, news.date, users.username FROM news " +
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

async function getAllCommentOfNews(id_news) {
    {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT comments.*, users.username, users.id_user FROM comments " +
                "INNER JOIN users ON comments.id_user = users.id_user "+
                "WHERE id_news = ? ", [id_news],
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

//POST

async function addComment(id_user, comment, id_news) {
    {
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO comments (id_user, message, id_news) VALUES (?, ?, ?)", [id_user, comment, id_news],
            (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = {
    getAllNews,
    getAllCommentOfNews,

    addComment,
}