// variáveis bolinha

let xBolinha = 300;
let yBolinha = 200; 
let diametroBolinha = 28;
let raioBolinha = diametroBolinha/2;

// variáveis velocidade bolinha

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variáveis raquete
let xRaquete = 5;
let yRaquete= 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// variáveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente; 

// variáveis placar

let meusPontos = 0;
let pontosDoOponente = 0;

// sons do jogo

let raquetada;
let ponto;
let trilha;

// Chance de Erro

let chanceDeErrar = 0;


// Funções Principais

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0); //1 - Desenha o background 
  mostraBolinha(); // 2 - Desenha a bolinha
  movimentaBolinha(); // 3 - Movimenta a Bolinha
  colisaoBorda(); // 4 - Verifica Colisão da bolinha
  mostraRaquete(xRaquete, yRaquete); // 5 - Mostra a raquete 1
  movimentaRaquete(); // 6 - Movimenta raquete 1 
  colisaoBolinhaRaquete1(); // 7 - Colisão bolinha raquete 1 
  mostraRaquete(xRaqueteOponente, yRaqueteOponente); // 8 - Mostra raquete 2
  movimentaRaqueteOponente(); // 9 - Movimenta raquete 2 
  colisaoBolinhaRaquete2(); // 10 - Colisão bolinha raquete 2
  incluiPlacar(); // 11 - Mostra placar do jogo
  marcaPonto(); // 12 - Altera placar do jogo
}

// Funções Secundárias

function mostraBolinha (){
  circle(xBolinha,yBolinha,diametroBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda() {
    if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0) {
        velocidadeYBolinha *= -1;
    }}
  
function mostraRaquete (x,y){
  
  rect( x,y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 5;}
}

function colisaoBolinhaRaquete1(){
  if (xBolinha - raioBolinha < xRaquete + comprimentoRaquete && yBolinha + raioBolinha > yRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente() {
   velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
   calculaChanceDeErrar ();
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function colisaoBolinhaRaquete2(){
  if (xBolinha + raioBolinha > xRaqueteOponente && yBolinha + raioBolinha > yRaqueteOponente && yBolinha - raioBolinha < yRaqueteOponente + alturaRaquete)

  {  
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluiPlacar() {
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140,0));
    rect(150,10,40,20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140,0));
    rect(450,10,40,20);
    fill(255);
    text(pontosDoOponente, 470, 26);

}

function marcaPonto() {
    if (xBolinha + raioBolinha > 600) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha - raioBolinha < 0) {
        pontosDoOponente += 1;
      ponto.play();
    }
}

function preload(){
 trilha = loadSound("trilha.mp3");
 ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");
}
