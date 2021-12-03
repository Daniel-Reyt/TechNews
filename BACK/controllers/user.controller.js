const userService = require("../services/user.service");

// GET
async function getAllUsers(req, res, next) {
    try {
        let usersData = await userService.getAllUsers();
        res.json(usersData);
    } catch (e) {
        console.log(e)
    }
}

// POST
async function addUser(req, res, next) {
    try {
        let username = req.body.username
        let password = req.body.password
        let role = 0

        let usersData = await userService.addUser(username, password, role);
        res.json(usersData);
    } catch (e) {
        console.log(e)
    }
}

// PUT
async function updateUser(req, res, next) {
    try {
        let id_user = req.body.id_user
        let username = req.body.username
        let password = req.body.password
        let role = req.body.role

        let usersData = await userService.updateUser(id_user, username, password, role);
        res.json(usersData);
    } catch (e) {
        console.log(e)
    }
}

// DELETE 
async function deleteUser(req, res, next) {
    try {
        let id_user = req.body.id_user

        let usersData = await userService.deleteUser(id_user);
        res.json(usersData);
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getAllUsers,

    addUser,

    updateUser,

    deleteUser
}