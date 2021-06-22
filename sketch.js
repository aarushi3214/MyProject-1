var canvas;
var bg1,bg2,bg3,bg4,bg5;
var brick, bricks;
var level = 0;
var ball, ballImg;
var paddle;
var edges;
var irene, ireneImg;
var wendy, wendyImg;
var seulgi, seulgiImg;
var jin, jinImg;
var taehyung, taehyungImg;
var jungkook, jungkookImg;
var bat, batImg, castle, castleImg;
var gun, gunImg , thanos, thanosImg;

function preload(){
ballImg = loadImage("ball.png");
batImg = loadImage("bat.png");
castleImg = loadImage("castle.png");
gunImg = loadImage("gun.png");
ireneImg = loadImage("irene.png");
jinImg = loadImage("Jin.png");
jungkookImg = loadImage("JK.png");
seulgiImg = loadImage("seulgi.png");
thanosImg = loadImage("thanos.png");
taehyungImg = loadImage("V.png");
wendyImg = loadImage("wendy.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);

 bricks = createGroup();
 createBrickRow(200,"red");
 createBrickRow(230,"red");
 createBrickRow(260,"red");
 createBrickRow(290,"red");
 createBrickRow(300,"red");
 createBrickRow(320,"red");
 createBrickRow(340,"red");
 createBrickRow(360,"red");
 createBrickRow(400,"red");
 createBrickRow(430,"red");
 createBrickRow(460,"red");

  ball = createSprite(810,316,20,20);
  ball.addImage(ballImg);

  paddle = createSprite(908,304,10,120);
}

function draw(){
  background(255);
  console.log(mouseX,mouseY);

  paddle.y = mouseY;

  mousePressed();
  ball.bounceOff(paddle);
  ball.bounceOff(bricks,brickhit);

  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

drawSprites();
}

function createBrickRow(y,color){
  for(var c = 0 ; c < 6 ; c++ ){
    brick = createSprite(200 + 55*c,y,50,25);
    brick.shapeColor = "red";
    bricks.add(brick);
  }
}

function mousePressed(){
  ball.velocityX = 3;
  ball.velocityY = 1;
}

function brickhit(ball,brick){
   brick.remove();
}