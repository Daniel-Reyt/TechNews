let chatService = require('../services/chat.service');
// GET
async function getAllMessages(req, res, next) {
    try {
        let messages = await chatService.getAllMessages()
        res.json(messages);
    } catch (e) {
        console.log(e)
    }
}

//POST
async function addMessage(req, res, next) {
    try {
        const id_user = req.body.id_user;
        const message = req.body.message;
        const date = req.body.date_message;
        let result = await chatService.addMessage(id_user, message, date)
        res.json(result);
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getAllMessages,

    addMessage
}