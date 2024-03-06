let dog;
let img_btn_iniciar, img_dog, img_fundo, img_inicio, img_moeda, img_perdeu, img_venceu, img_obstaculo;
let poop = [];
let moeda = [];
let gamestatus = 0;
let gameover;

function preload() {
  img_btn_iniciar = loadImage("imagens/btn_iniciar.png");
  img_dog = loadImage("imagens/dog.gif");
  img_fundo = loadImage("imagens/fundo.gif");
  img_inicio = loadImage("imagens/inicio.gif");
  img_moeda = loadImage("imagens/moeda.gif");
  img_perdeu = loadImage("imagens/perdeu.png");
  img_venceu = loadImage("imagens/venceu.png");
  img_obstaculo = loadImage("imagens/obstaculo.png");
}

function setup() {
  let canvas = createCanvas(800, 400);
  canvas.center()
  dog = new Dog();
  fundo = new Fundo();
  inicio = new Inicio();
  gameover = new Gameover();
}

function draw() {

  if (gamestatus == 0) {
    inicio.show();
  } else if (gamestatus == 1) {
    background(220);
    fundo.show();
    dog.show();
    dog.move();

    nascerpoop();
    for (let p of poop) {
      p.show();
      p.move();
      if (dog.hits(p)) {
        gamestatus = 2;
      }
    }
    nascermoeda();
    for (let m of moeda) {
      m.show();
      m.move();
    }
  } else if (gamestatus == 2) {
    fundo.show();
    gameover.show();
  }



}

function keyPressed() {
  if (key === " ") {
    dog.jump();
  }
}

function nascerpoop() {
  if (frameCount % 90 === 0) {
    poop.push(new Popp());
  }
}
function nascermoeda() {
  if (frameCount % 80 === 0) {
    moeda.push(new Moeda());
  }
}

function mousePressed() {
  gamestatus = 1;
}