let chatDB = require('../db/chat.db');
// GET
async function getAllMessages() {
    try {
        return await chatDB.getAllMessages();
    } catch (e) {
        console.log(e)
    }
}
async function addMessage(id_user, message, date) {
    try {
        return await chatDB.addMessage(id_user, message, date);
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getAllMessages,

    addMessage
}