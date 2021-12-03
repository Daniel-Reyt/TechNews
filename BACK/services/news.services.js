let newsDB = require('../db/news.db');

// GET
async function getAllNews() {
    try {
        return await newsDB.getAllNews();
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getAllNews
}