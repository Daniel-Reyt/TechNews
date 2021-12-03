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

module.exports = {
    getAllNews
}