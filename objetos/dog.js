class Dog {
    constructor() {
        this.w = width / 7;
        this.h = height / 8;
        this.x = 50;
        this.y = height - 1.2 * this.h;
        this.g = 2;
        this.vy = 0;
    }

    move() {
        this.y += this.vy;
        this.vy += this.g;
        this.y = constrain(this.y, 0, height - this.h);
    }

    show() {
        image(img_dog, this.x, this.y, this.w, this.h);
    }

    jump() {
        if (this.y == height - this.h) {
            this.vy = -30;
        }
    }

    hits(poop) {
        let x1 = this.x;
        let y1 = this.y;
        let x2 = poop.x;
        let y2 = poop.y;

        return collideRectRect(x1, y1, this.w, this.h, x2, y2, poop.w, poop.h);
    }


}