const fs = require('fs');

function readFile(){
    let userData = fs.readFileSync('./resources/user.json',"utf-8");
    return JSON.parse(userData);
}

function reWriteFile(path,usersArray){
    fs.writeFileSync(path,JSON.stringify(usersArray));
}

function isFileExists(path){
    return fs.existsSync(path);
}

module.exports = {
    readFile: readFile,
    reWriteFile: reWriteFile,
    isFileExists: isFileExists
}