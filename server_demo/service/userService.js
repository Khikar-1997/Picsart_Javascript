const helperFunctions = require('./helper_functions');
const User = require('../model/User');

function createUser(user){
    if (helperFunctions.isFileExists('./resources/user.json')){
        const cache = helperFunctions.readFile();
        const id = cache[cache.length - 1].id + 1;
        const newUser = new User(id,user.name,user.username,user.age,user.email,user.phoneNumber);
        cache.push(newUser)
        console.log(cache);
        helperFunctions.reWriteFile('./resources/user.json',cache);
    } else {
        const id = 1;
        const newUser = new User(id,user.name,user.username,user.age,user.email,user.phoneNumber)
        const users = [newUser];
        helperFunctions.reWriteFile('./resources/user.json',users);
    }
}

function getAllUsers(){
    return helperFunctions.readFile();
}

function getUserById(id){
    let userById;
    for (let i = 0; i < getAllUsers().length; i++) {
        if (id === getAllUsers()[i].id){
            userById = getAllUsers()[i];
        }
    }
    return userById;
}

function updateById(id,user){
    let updatedUser;
    const usersArray = getAllUsers()
    for (let i = 0; i < usersArray.length; i++) {
        if (id === usersArray[i].id){
            updatedUser = usersArray[i];
            usersArray.splice(i,1);
        }
    }
    updatedUser = new User(id,user.name,user.username,user.age,user.email,user.phoneNumber);
    usersArray.splice(id - 1,0,updatedUser);
    helperFunctions.reWriteFile('./resources/user.json',usersArray)
}

function deleteById(id){
    const usersArray = getAllUsers();
    for (let i = 0; i < usersArray.length; i++) {
        if (id === usersArray[i].id){
            usersArray.splice(i,1);
        }
    }
    helperFunctions.reWriteFile('./resources/user.json',usersArray);
}

module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    updateById: updateById,
    deleteById: deleteById
}