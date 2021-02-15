function Video(id, name, duration, legalVideo) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.legalVideo = legalVideo;
}

Video.prototype.printInfo = function () {
    console.log(`id: ${this.id} \n name: ${this.name}  \n size: ${this.size} \n legalVideo: ${this.legalVideo}`)
}