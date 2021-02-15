import PicsartAccount from "./picsart_account.mjs";

function Admin(id,name,surname,username,password,role){
    PicsartAccount.apply(this,arguments);
}

Admin.prototype = Object.create(PicsartAccount.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.blockUser = function (user){
    if (user.isBlocked){
        console.log(`${user.name} + user is blocked.`);
    } else{
        user.isBlocked = true;
    }
}

Admin.prototype.unblockUser = function (user) {
    if (!user.isBlocked)
        console.log(`${user.name} user is unlocked.`);
    else user.isBlocked = false;
}

export default Admin;