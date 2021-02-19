const fs = require('fs');

function config() {
    let readFile = fs.readFileSync('.env', 'utf-8');
    let newData = readFile.split('\n');
    for (let data of newData) {
        const [key, value] = data.split(/=(.+)/);
        if (!key.startsWith('#') && !key.startsWith(' ')) {
            process.env[key] = value;
        }
    }
}

module.exports = {
    config: config
}

