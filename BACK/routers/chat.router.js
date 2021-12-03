const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');

// GET
router.get('/messages', chatController.getAllMessages);
// POST
router.post('/', chatController.addMessage);

module.exports = router;