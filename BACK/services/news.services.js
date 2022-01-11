let newsDB = require('../db/news.db');

// GET

async function getAllNews() {
    try {
        return await newsDB.getAllNews();
    } catch (e) {
        console.log(e)
    }
}

async function getAllCommentOfNews(id_news) {
    try {
        return await newsDB.getAllCommentOfNews(id_news);
    } catch (e) {
        console.log(e)
    }
}

//POST
async function addNews(id_user, message) {
    try {
        return await newsDB.addNews(id_user, message);
    } catch (e) {
        console.log(e);
    }
}
async function addComment(id_user, comment, id_news) {
    try {
        return await newsDB.addComment(id_user, comment, id_news);
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    getAllNews,
    getAllCommentOfNews,
    addNews,
    addComment,
}