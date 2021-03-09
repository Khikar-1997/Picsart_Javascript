const userService = require('../service/userService')

function createUser(req,res){
    let body = ' ';
    req.on('data',chunk => {
        console.log(chunk.toString());
        body += chunk.toString();
    });
    req.on('end',() => {
        userService.createUser(JSON.parse(body));
        res.statusCode = 200;
    })
    res.end("User successfully created")
}

function getAllUsers(res){
    const users = userService.getAllUsers();
    res.end(JSON.stringify(users));
}

function getUserById(res,id){
    const user = userService.getUserById(id);
    res.end(JSON.stringify(user));
}

function updateUser(req,res,id){
    let body = ' ';
    req.on('data',chunk => {
        body += chunk.toString();
    });
    req.on('end',() => {
        userService.updateById(id,JSON.parse(body));
        res.statusCode = 200;
    });
    res.end("User successfully updated")
}

function deleteById(res,id){
    const user = userService.deleteById(id);
    res.end(JSON.stringify(user));
}

module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    updateUser: updateUser,
    deleteById: deleteById
};