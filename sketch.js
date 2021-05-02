var tower,towerImg;
var door,doorImg,doorGrp;
var climber,climberImg,climberGrp;
var ghost,ghostImg
var invisibleBlock,invisibleBlockGrp;
var gameState="play";
var spookySound;
var ghost_jumpingImg;

function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  spookySound=loadSound("spooky.wav");
  ghost_jumping=loadImage("ghost-jumping.png");
}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300)
  tower.addImage(towerImg);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale=0.5;
  
  doorGrp=new Group();
  climberGrp=new Group();
  invisibleBlockGrp=new Group();
}

function draw(){
  background("black");
  
  if(gameState=="play"){
    spookySound.play();
    
  if(tower.y>400){
     tower.y=300}
  
  if(keyDown("UP_ARROW")){
    ghost.changeAnimation(ghost_jumpingImg)
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.5;
  
  if(keyDown("LEFT_ARROW")){
    ghost.x=ghost.x-3;
  }
  
   if(keyDown("RIGHT_ARROW")){
    ghost.x=ghost.x+3;
   }
  
  if(climberGrp.isTouching(ghost)){
ghost.velocityY=0;}
  
if(invisibleBlockGrp.isTouching(ghost) ||ghost.y>600){
ghost.destroy();
gameState="end";
}
  
  spawnDoors();
  drawSprites();
}
  if(gameState==="end"){
    textSize(30)
    fill("yellow")
    
text("Game Over",250,250)}
  
  
}

function spawnDoors(){
  if(frameCount%240==0){
door=createSprite(200,-50)
  door.addImage(doorImg);
  door.velocityY=1;
    door.x=Math.round(random(120,400));
    
    climber=createSprite(200,10);
    climber.addImage(climberImg);
    climber.velocityY=1;
    climber.x=door.x;
   invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=climber.velocityY;
    invisibleBlock.visible=false;
    
    doorGrp.add(door);
    climberGrp.add(climber);
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    door.lifetime=800;
    climber.lifetime=800;
    invisibleBlockGrp.add(invisibleBlock);
      invisibleBlock.lifetime=800;                   
  }
  
}


