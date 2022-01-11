const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');

// GET

router.get('/', newsController.getAllNews);
router.post('/getComments/', newsController.getAllCommentOfNews);

// POST
router.post('/', newsController.addNews);
router.post('/comment', newsController.addComment);

module.exports = router;