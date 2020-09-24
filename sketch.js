//creating variables
var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3,wall4,
    speed1,weight1,thick1,hitting1=false,
    speed2,weight2,thick2,hitting2=false,
    speed3,weight3,thick3,hitting3=false,
    speed4,weight4,thick4,hitting4=false,
    deform1,deform2,deform3,deform4;
//loading images, sounds
function preload(){
  bulletI=loadImage("bullet.png");
  gunI=loadImage("gun.png");
  gSound=loadSound("G.mp3");
}

function setup() {
  //creating canvas
  createCanvas(1200,800);
  //giving speeds and weights to bullets
  speed1=random(223,321);
  weight1=random(30,52);
  speed2=random(223,321);
  weight2=random(30,52);
  speed3=random(223,321);
  weight3=random(30,52);
  speed4=random(223,321);
  weight4=random(30,52);
  thick1=random(22,83);
  thick2=random(22,83);
  thick3=random(22,83);
  thick4=random(22,83);
  //calculating deformation
  deform1=(0.5*weight1*sq(speed1))/Math.pow(thick1,3);
  deform2=(0.5*weight2*sq(speed2))/Math.pow(thick2,3);
  deform3=(0.5*weight3*sq(speed3))/Math.pow(thick3,3);
  deform4=(0.5*weight4*sq(speed4))/Math.pow(thick4,3);
  //creating sprites
  bullet1=createSprite(90, 100, 1, 50);
  bullet2=createSprite(90, 300, 1, 50);
  bullet3=createSprite(90, 500, 1, 50);
  bullet4=createSprite(90, 700, 1, 50);
  //adding images to the bullets
  bullet1.addImage("bullet",bulletI);
  bullet2.addImage("bullet",bulletI);
  bullet3.addImage("bullet",bulletI);
  bullet4.addImage("bullet",bulletI);
  //giving speed to bullets
  bullet1.velocityX=speed1;
  bullet2.velocityX=speed2;
  bullet3.velocityX=speed3;
  bullet4.velocityX=speed4;
  //creating walls
  wall1=createSprite(1150,100,thick1,150);
  wall2=createSprite(1150,300,thick2,150);
  wall3=createSprite(1150,500,thick3,150);
  wall4=createSprite(1150,700,thick4,150);
  //playing gun's sound
  gSound.play();
  for(a=135;a<736;a=a+200){
    gun=createSprite(100,a,0,0);
    gun.addImage("gun",gunI);
    gun.scale=0.5;
  }
}

function draw() {
  //creating background and the partitioning rectangles
  background("lightblue");  
  rect(0,200,width,10);
  rect(0,400,width,10);
  rect(0,600,width,10);
  //calling hit1234() functions
  hit1(wall1,bullet1);
  hit2(wall2,bullet2);
  hit3(wall3,bullet3);
  hit4(wall4,bullet4);
  //showing Press F5 to test Other Walls ©
  textSize(20);
  fill("blue");
  text("Press F5 to test Other Walls ©",500,50);
  //checking for deformation
  if(hitting1==true){
    bullet1.velocityX=0;
    bullet1.x=(wall1.x-thick1/2)-(bullet1.width/2);
    if(deform1>10){
      fill("red");
      text("Weak wall ⚠",400,105);
      wall1.shapeColor=color(255,0,0);
    }else if(deform1<=10){
      fill("green");
      text("Good wall ✔",400,105);
      wall1.shapeColor=color(0,255,0);
    }
  }
  if(hitting2==true){
     bullet2.velocityX=0;
     bullet2.x=(wall2.x-thick2/2)-(bullet2.width/2);
     if(deform2>10){
        fill("red");
        text("Weak wall ⚠",400,305);
        wall2.shapeColor=color(255,0,0);
     }else if(deform2<=10){
        fill("green");
        text("Good wall ✔",400,305);
        wall2.shapeColor=color(0,255,0);
     }
  }
  if(hitting3==true){
     bullet3.velocityX=0;
     bullet3.x=(wall3.x-thick3/2)-(bullet3.width/2);
     if(deform3>10){
        fill("red");
        text("Weak wall ⚠",400,505);
        wall3.shapeColor=color(255,0,0);
     }else if(deform3<=10){
        fill("green");
        text("Good wall ✔",400,505);
        wall3.shapeColor=color(0,255,0);
     }
  }
  if(hitting4==true){
     bullet4.velocityX=0;
     bullet4.x=(wall4.x-thick4/2)-(bullet4.width/2);
     if(deform4>10){
        fill("red");
        text("Weak wall ⚠",400,705);
        wall4.shapeColor=color(255,0,0);
     }else if(deform4<=10){
        fill("green");
        text("Good wall ✔",400,705);
        wall4.shapeColor=color(0,255,0);
     }
  }
  //drawing sprites
  drawSprites();
}
//creating functions hits()
function hit1(wall1,bullet1){
  b1RE=bullet1.x+(bullet1.width);
  w1LE=wall1.x;
  if(b1RE>=w1LE){
    hitting1=true;
    return true;    
  }
  return false;
}

function hit2(wall2,bullet2){
  b2RE=bullet2.x+(bullet2.width);
  w2LE=wall2.x;
  if(b2RE>=w2LE){
    hitting2=true;
    return true;
  }
  return false;  
}

function hit3(wall3,bullet3){
  b3RE=bullet3.x+(bullet3.width);
  w3LE=wall3.x;
  if(b3RE>=w3LE){
    hitting3=true;
    return true;
  }
  return false;
}

function hit4(wall4,bullet4){
  b4RE=bullet4.x+(bullet4.width);
  w4LE=wall4.x;
  if(b4RE>=w4LE){
    hitting4=true;
    return true;
  }
  return false;
}