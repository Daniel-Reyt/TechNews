const commentsDb = require('../db/comments.db');

// POST 

async function deleteComment(id_comment) {
    try {
        return await commentsDb.deleteComment(id_comment)
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    deleteComment
}