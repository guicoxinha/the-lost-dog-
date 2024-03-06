class Moeda {
    constructor() {
        this.w = width / 20;
        this.h = width / 20;
        this.x = width;
        this.y = height - 2 * this.h;
        this.vx = 10;
    }
    show() {
        image(img_moeda, this.x, this.y, this.w, this.h);
    }

    move() {
        this.x -= this.vx;
    }

}
