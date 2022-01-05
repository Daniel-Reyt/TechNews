const commentsService = require('../services/comments.service')

//POST

async function deleteComment(req, res, next) {
    try {
        const id_comment = req.body.id_comment;

        let newComment = await commentsService.deleteComment(id_comment);
        res.json(newComment);
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    deleteComment
}