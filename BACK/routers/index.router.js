let user = require("../routers/user.router");
let chat = require("../routers/chat.router");
let news = require("../routers/news.router");
let comments = require("../routers/comments.router");
let marques = require("../routers/marque.router");
let produits = require("../routers/produit.router");
let typesProduits = require("../routers/types_produit.router");

module.exports = function(app) {
    app.use('/users', user);
    app.use('/chat', chat);
    app.use('/news', news);
    app.use('/comments', comments);
    app.use('/marques', marques);
    app.use('/produits', produits);
    app.use('/typeProduits', typesProduits);

}