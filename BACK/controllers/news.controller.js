const newsService = require("../services/news.services");

// GET

async function getAllNews(req, res, next) {
    try {
        let newsData = await newsService.getAllNews();
        res.json(newsData);
    } catch (e) {
        console.log(e)
    }
}

async function getAllCommentOfNews(req, res, next) {
    try {
        let comments = await newsService.getAllCommentOfNews(req.body.id_news);
        res.json(comments)
    } catch (e) {
        console.log(e);
    }
}

//POST

async function addNews(req, res, next) {
    try {
        const id_user = req.body.id_user;
        const comment = req.body.message;

        let newNews = await newsService.addNews(id_user, message);
        res.json(newNews);
    } catch (e) {
        console.log(e)
    }
}

async function addComment(req, res, next) {
    try {
        const id_user = req.body.id_user;
        const comment = req.body.comment;
        const id_news = req.body.id_news;

        let newComment = await newsService.addComment(id_user, comment, id_news);
        res.json(newComment);
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getAllNews,
    getAllCommentOfNews,
    addNews,
    addComment,
}