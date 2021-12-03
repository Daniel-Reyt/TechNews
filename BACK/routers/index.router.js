let user = require("../routers/user.router");
let chat = require("../routers/chat.router");
let news = require("../routers/news.router");

module.exports = function(app) {
    app.use('/users', user);
    app.use('/chat', chat);
    app.use('/news', news)
}