class Popp {
    constructor() {
        this.w = 30;
        this.h = 30;
        this.x = width;
        this.y = height - 1.2 * this.h;
        this.vx = 7;
    }
    show() {
        image(img_obstaculo, this.x, this.y, this.w, this.h);
    }

    move() {
        this.x -= this.vx;
    }
}