class Fundo {
    constructor(){
this.w = width;
this.h = height; 
this.x=0;
this.y=0;
    }
    show() {
        image(img_fundo, this.x, this.y, this.w, this.h);
    }
}