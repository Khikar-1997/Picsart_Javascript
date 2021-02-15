function PicsartAccount(id, name, surname, username, password, role) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.password = password;
    this.role = role;
}

PicsartAccount.prototype.welcomeMassage = function (user) {
    if (user.role === 'user') {
        console.log(`Hello dear ${user.name}.Welcome,we wish you to have a nice day with Picsart`);
    }
}

PicsartAccount.prototype.printInfo = function () {
    console.log(`id: ${this.id} \n name: ${this.name}  \n surname: ${this.surname} \n username: ${this.username} \n password: ${this.password} \n role: ${this.role}`)
}