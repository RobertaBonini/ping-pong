let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis da raquete
  let xRaquete = 5;
  let yRaquete = 150;
  let raqueteComp = 10;
  let raqueteAltura = 80;

//  colisao  da raquete com a bolinha
let colidiu = false;

// variaveis da raquete do oponente
let xRaqueteOp = 585;
let yRaqueteOp = 150;
let velocidadeYOponente; 

// placar
let meusPontos = 0;
let pontosOp = 0;

// sons do jogo
let rauqetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background("black");
  //bolinha
  mostraBolinha();
  movimentoBolinha();
  colisaoBolinha();
  //bolinhaPresa();
  // raquete
  mostraRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  // raquete e bolinha
  colisaoBolinhaRaquete();
  colisaoBiblioteca(xRaquete, yRaquete);
  colisaoBiblioteca(xRaqueteOp, yRaqueteOp);
  // raquete do oponente
  mostraRaquete(xRaqueteOp, yRaqueteOp);
  movimentoRaqueteOp();
  // placar
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinha(){
    
  if (xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function bolinhaPresa(){
  if (xBolinha - raio < 0){
    xBolinha = 23
  }
}

function mostraRaquete(x,y) {
     rect( x, y, raqueteComp, raqueteAltura);
  }

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
    if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function colisaoBolinhaRaquete(){
  if (xBolinha < xRaquete + raqueteComp && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoBiblioteca(x, y){
  colidiu = 
  collideRectCircle(x, y, raqueteComp, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


function movimentoRaqueteOp() {
    if (keyIsDown(87)){
    yRaqueteOp -=10;
  }
    if (keyIsDown(83)){
    yRaqueteOp +=10;
  }
}

function incluiPlacar(){
  //edição de texto
  stroke("white");
  textAlign(CENTER);
  textSize(16);
  fill(color(95, 158, 160))
  rect(150, 10, 40, 20);
  fill("white");
  text(meusPontos, 170, 26);
  fill(color(95, 158, 160))
  rect(450, 10, 40, 20);
  fill("white");
  text(pontosOp, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 10) {
        pontosOp += 1;
      ponto.play();
    }
}






