class Gameover {
    constructor() {
        this.w = width;
        this.h = height;
        this.x = 0;
        this.y = 0;
    }
    show() {
        image(img_perdeu, this.x, this.y, this.w, this.h);
    }
}