
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, groundImg
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey = createSprite(50, 350, 2, 2)
monkey.addAnimation("running monkey",monkey_running)
monkey.scale = 0.2  

   
  
ground = createSprite(0, 400, 1200, 20)
ground.velocityX = -4 
ground.x=ground.width/2  
 
}


function draw() {  
background("white")
  
  text("Survival Time: " + survivalTime, 196, 74)
  survivalTime = ceil(frameCount/getFrameRate)
  
  FoodGroup = createGroup()
  obstacleGroup = createGroup()
  
  if (ground.x == 0 && ground.y == 400) {
  ground.x=ground.width/2  
  }
  
  if (keyDown("space") && monkey.y >= 100) {
    monkey.y = -12 
    monkey.velocityY = monkey.velocityY + 8 
  }
  
  fruits()
  obstacle()
  
  monkey.collide(ground)
drawSprites()
  
}

function fruits() {
  
  if(frameCount%80 === 0) {
  banana = createSprite(400, 40, 90)
  banana.addImage("banana", bananaImage)
  banana.scale = 0.2
  banana.velocityX = -6
  banana.lifetime=200      
  banana.y = Math.round(random(120, 200))
  FoodGroup.add(banana)
    
  }
}

function obstacle() {
  
  if(frameCount%300 === 0) {
  obstacle = createSprite(400, 40, 90)
  obstacle.addImage("obstacle", obstacleImage)
  obstacle.scale = 0.2
  obstacle.velocityX = -6
  obstacle.lifetime=200      
  obstacle.y = Math.round(random(120, 200))
  obstacleGroup.add(obstacle)
    
  }
}




