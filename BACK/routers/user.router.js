const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// GET
router.get('/', userController.getAllUsers);

// POST
router.post('/', userController.addUser);
router.post('/ban', userController.banUser);

// PUT
router.put('/', userController.updateUser);

// DELETE 
router.delete('/', userController.deleteUser);

module.exports = router;
