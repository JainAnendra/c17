var monkey , monkey_running;

var banana ,bananaImage, obstacle, obstacleImage;

var foodGroup, obstacleGroup;

var score=0;

var bgImage;

var bg;

var invisibleg;

var banana;

var r;

var goImage;

var st;

function preload(){

 

   //bgImage = loadImage("jungle.png");

  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

     

  bananaImage = loadImage("banana.png");

  obstacleImage = loadImage("obstacle.png");

 // goImage = loadImage("sprite_0.png");

}

 

 

 

function setup() {

        createCanvas(590,600);

        bg = createSprite(0,500,600,10)

       // bg.addImage("background",bgImage);

        bg.scale=2.5;

        invisibleg = createSprite(295,510,600,10)

        invisibleg.visible=false;

        bg.x = bg.width/2;

        monkey = createSprite(60,440,20,20);

        monkey.addAnimation("running",monkey_running)

        monkey.scale=0.2;

 

        foodGroup = new Group()

        obstacleGroup = new Group()

}

 

 

function draw() {

     background("white");


//creating moving background

      bg.velocityX=-4

      if (bg.x < 0){

        bg.x = bg.width/2;

      }

 

//monkey jump control

       if(keyDown("space") && monkey.y >  439) {

          monkey.velocityY = -17;

           

      }

      if(monkey.y < 400){

        monkey.velocityY = monkey.velocityY + 0.8

      }

      monkey.collide(invisibleg)

 

      food();

      obstacles();

 

      if(foodGroup.isTouching(monkey)){

           foodGroup.destroyEach();

      }

 

 

 

drawSprites();

 

//survival time scoring system      

        score = Math.ceil(frameCount/frameRate())

        textSize(30)

        fill("black");

        text("SURVIVAL TIME : "+score,50,100);

      

        

}

 

 

function food(){

 

      if(World.frameCount%150===0){

         banana = createSprite(600,Math.round(random(190,300)));

         banana.addImage(bananaImage);

         banana.scale=0.2;

         banana.velocityX=-7;

         banana.lifetime=90;

         foodGroup.add(banana);  

    }

   }

function obstacles(){

     if(World.frameCount%140===0){     

       obstacle = createSprite(560,460,300,300);

       obstacle.addImage(obstacleImage);

       obstacle.velocityX=-6;

       obstacle.scale=0.2 ;

       obstacleGroup.add(obstacle);

       obstacle.lifetime=100;

 console.log(obstacle.x);

 

 

     }

    }

     