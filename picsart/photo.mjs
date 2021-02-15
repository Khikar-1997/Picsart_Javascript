function Photo(id, name, size, legalPhoto) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.legalPhoto = legalPhoto
}

Photo.prototype.printInfo = function () {
    console.log(`id: ${this.id} \n name: ${this.name}  \n size: ${this.size} \n legalPhoto: ${this.legalPhoto}`);
}