var ted, tedImage, tedStill;
var jeff, jeffImage, jeffStill;

var zombie, zombieImage;
var bg;

function preload() {
  tedImage = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png");
  tedStill = loadAnimation("b5.png");
  
  bg = loadImage("bg.jpg");
  
  jeffImage = loadAnimation("j1.png","j2.png","j3.png","j4.png","j5.png","j6.png","j7.png","j8.png","j9.png","j10.png");
  jeffStill = loadAnimation("j7.png");
  
  zombieImage = loadAnimation("z1.png","z2.png","z3.png","z4.png","z5.png","z6.png","z7.png","z8.png");
}


function setup() {
  createCanvas(1500,750);
  
  ted = createSprite(500,200);
  ted.addAnimation("tedStill",tedStill);
  ted.addAnimation("ted",tedImage);


  jeff = createSprite(500,100);
  jeff.addAnimation("jeffStill",jeffStill);
  jeff.addAnimation("jeff",jeffImage);
}

function draw() {
  background(bg); 
  
  
  if(keyDown("up")){
    ted.y = ted.y -5;
    ted.changeAnimation("ted",tedImage);
  }
  
  if(keyWentUp("up")){
    ted.changeAnimation("tedStill",tedStill);
  }
  
  if(keyDown("down")){
    ted.y = ted.y +5;
    ted.changeAnimation("ted",tedImage);
  }

  if(keyWentUp("down")){
    ted.changeAnimation("tedStill",tedStill);
  }


  if(keyDown("left")){
    ted.x = ted.x -5;
    ted.changeAnimation("ted",tedImage);
  }

  if(keyWentUp("left")){
    ted.changeAnimation("tedStill",tedStill);
  }

  if(keyDown("right")){
    ted.x = ted.x +5;
    ted.changeAnimation("ted",tedImage);
  }

  if(keyWentUp("right")){
    ted.changeAnimation("tedStill",tedStill);
  }
  

  //moving jeff
  if(keyDown("w")){
    jeff.y = jeff.y -5;
    jeff.changeAnimation("jeff",jeffImage);
  }

  if(keyWentUp("w")){
    jeff.changeAnimation("jeffStill",jeffStill);
  }
  
  if(keyDown("s")){
    jeff.y = jeff.y +5;
    jeff.changeAnimation("jeff",jeffImage);
  }

  if(keyWentUp("s")){
    jeff.changeAnimation("jeffStill",jeffStill);
  }

  if(keyDown("a")){
    jeff.x = jeff.x -5;
    jeff.changeAnimation("jeff",jeffImage);
  }

  if(keyWentUp("a")){
    jeff.changeAnimation("jeffStill",jeffStill);
  }

  if(keyDown("d")){
    jeff.x = jeff.x +5;
    jeff.changeAnimation("jeff",jeffImage);
  }

  if(keyWentUp("d")){
    jeff.changeAnimation("jeffStill",jeffStill);
  }








  
  drawSprites();
}