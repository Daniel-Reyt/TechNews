const userDB = require("../db/user.db")

// GET
async function getAllUsers(req, res, next) {
    try {
        return await userDB.getAllUsers();
    } catch (e) {
        console.log(e)
    }
}

// POST
async function addUser(username, password, role) {
    try {
        return await userDB.addUser(username, password, role);
    } catch (e) {
        console.log(e)
    }
}

// PUT
async function updateUser(id_user, username, password, role) {
    try {
        return await userDB.updateUser(id_user, username, password, role);
    } catch (e) {
        console.log(e)
    }
} 

// DELETE
async function deleteUser(id_user) {
    try {
        return await userDB.deleteUser(id_user);
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