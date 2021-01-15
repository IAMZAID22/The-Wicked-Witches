var hand,handImg,aimImg,b1,b2,b3,b4,e1,e2,e3,enemyImg,bg,score,hp,GameState ="alive";
function preload(){
handImg = loadImage("hand.png");  
aimImg = loadImage("aim.png");  
enemyImg = loadImage("enemy.png");
bg = loadImage("background.png");
}
function setup() {
  createCanvas(800, 600)
 
  hand = createSprite(400,520);
  hand.addImage(handImg);
  hand.scale = 0.5
 
  aim = createSprite(400,200);
  aim.addImage(aimImg);
  aim.scale = 0.1;
  
  b1 = createSprite(400,400,800,1);
  b1.visible = false
  b1.shapeColor = "black"
  
  b2 = createSprite(400,1,800,1);
  b2.visible = false
  
  b3= createSprite(1,300,1,600);
  b3.visible = false
    
  b4 = createSprite(799,500,800,1);
  b4.visible = false
  
  e1 = createSprite(0,Math.round(random(50,400)))
  e1.addImage(enemyImg);
  e1.scale = 0.4
  
  e2 = createSprite(0,Math.round(random(50,400)))
  e2.addImage(enemyImg);
  e2.scale = 0.4
  
  e3 = createSprite(0,Math.round(random(50,400)))
  e3.addImage(enemyImg);
  e3.scale = 0.4
  
  score = 0;
  hp = 10
}

function draw() {
  background(bg);
  textSize(25);
  fill("white")
  text("Citizens Alive:"+hp,600,50)
  text("Score:"+score,50,50)
  if(GameState === "alive"){
  e1.velocityX = Math.round(random(4,9))
  e2.velocityX = Math.round(random(4,9))
  e3.velocityX = Math.round(random(4,9))
  hand.x = mouseX;
  aim.x = mouseX;
  
  if(keyDown("down")){
    aim.y = aim.y+10
  }
   if(keyDown("up")){
    aim.y = aim.y-10
       }
  if(e1.isTouching(e2)||e1.isTouching(e3)){
    e1.x = 0
    e1.y = Math.round(random(50,400))
  }
    if(e2.isTouching(e3)||e2.isTouching(e1)){
    e2.x = 0
    e2.y = Math.round(random(50,400))
  }
    if(e3.isTouching(e2)||e3.isTouching(e1)){
    e3.x = 0
    e3.y = Math.round(random(50,400))
  }
  if(e1.isTouching(aim)&&keyDown("space")){
    score = score +1
    e1.x = 0
    e1.y = Math.round(random(50,400))
  }
  if(e2.isTouching(aim)&&keyDown("space")){
    score = score +1
    e2.x = 0
    e2.y = Math.round(random(50,400))
  }
  if(e3.isTouching(aim)&&keyDown("space")){
    score = score +1
    e3.x = 0
    e3.y = Math.round(random(50,400))
  }
  if(e1.x>=800){
    hp = hp-1;
    e1.x = 0
    e1.y = Math.round(random(50,400))
  }
  if(e2.x>=800){
    hp = hp-1;
    e2.x = 0
    e2.y = Math.round(random(50,400))
  }
  if(e3.x>=800){
    hp = hp-1;
    e3.x = 0
    e3.y = Math.round(random(50,400))
  }
  }
  if(hp === 0){
    GameState = "dead";
  }
  if(GameState ==="dead"){
    textSize(35);
    fill("white");
    text("You Lost",400,300);
  }
  aim.collide(b1)
  drawSprites();
}
