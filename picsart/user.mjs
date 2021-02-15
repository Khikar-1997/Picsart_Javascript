import PicsartAccount from "./picsart_account.mjs";

function User(id, name, surname, username, password, role, isBlocked) {
    PicsartAccount.apply(this, arguments);
    this.isBlocked = isBlocked;
}

User.prototype = Object.create(PicsartAccount.prototype);
User.prototype.constructor = User;

User.prototype.editPhoto = function (photo) {
    if (photo.legalPhoto) {
        console.log(`${photo.name} is successfully edited`);
    } else {
        console.log('Something went wrong.Try again');
    }
}

User.prototype.editVideo = function (video) {
    if (video.legalVideo) {
        console.log(`${video.name} is successfully edited`);
    } else {
        console.log('Something went wrong.Try again');
    }
}

export default User;