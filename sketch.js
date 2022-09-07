var player
var ground                      
var snake
var brc
var lm1
var lm2





function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  

  player = createSprite(-windowWidth*1.8,200,50,50);
  player.shapeColor = "red";
  ground = createSprite(windowWidth/2,windowHeight- 100,windowWidth*5,40)
  snake = createSprite(-windowWidth*1.4,windowHeight-30,40,70)
  snake.shapeColor = 'green'
  brc = createSprite(-windowWidth*1.4,windowHeight-60,100,120)
  brc.shapeColor = 'black'
  lm1 = createSprite(-windowWidth*1.4,windowHeight -500,50,10) 
  lm1.visible = false
  lm2 = createSprite(-windowWidth*1.4,windowHeight +250,50,10)
  snake.velocityY = -10

  Plataforma()
}

function draw() {
  background(0); 

  player.velocityY +=1
  




  if(keyDown('D')){
    player.x = player.x + 3
  }
  if(keyDown('W')&& player.collide(ground)){
 player.velocityY = - 20

  }
  if(keyDown('A')){
    player.x = player.x - 3
  }
  if(keyDown('S')){
    player.y = player.y + 10         
  }
  camera.position.x = player.x   
  player.collide(ground)
  drawSprites();
  
  snake.bounceOff(lm1)
  snake.bounceOff(lm2)
  
}
function Plataforma(){

var x = 0 
for(var i = 0 ; i < 15; i++){
   var plataforma = createSprite(-windowWidth*1.6 + x,random(windowHeight- 200,windowHeight-300),100,20)
   x += 1000
}

}

















