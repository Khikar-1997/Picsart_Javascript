const userController = require('./controller/userController');
const http = require('http');
const baseUrl = '/api/v1/users';

http.createServer(((req, res) => {
    if (req.method === 'POST' && req.url === baseUrl)
        userController.createUser(req,res);
    else if(req.method === 'GET' && req.url === baseUrl)
        userController.getAllUsers(res);
    else if (req.method === 'GET' && req.url.startsWith(baseUrl))
        userController.getUserById(res,parseInt(req.url.split('/').slice(-1).pop()));
    else if(req.method === 'PUT' && req.url.startsWith(baseUrl))
        userController.updateUser(req,res,parseInt(req.url.split('/').slice(-1).pop()));
    else if (req.method === 'DELETE' && req.url.startsWith(baseUrl))
    userController.deleteById(res,parseInt(req.url.split('/').slice(-1).pop()));
    else
        console.error('Server is not finding');
})).listen(3000,() => {
    console.log("Hello World!");
})