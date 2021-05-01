var tom,jerry
var gardenimg
var tomsimg
var jerrysimg
var tomswalking
var jerryteasing
var tomsmiling
var jerrystanding
function preload() {
    //load the images here
    gardenimg= loadImage("images/garden.png")
    tomsimg= loadImage("images/cat1.png")
    jerrysimg= loadImage("images/mouse1.png")
    tomswalking= loadAnimation("images/cat2.png","images/cat3.png")
    jerryteasing= loadAnimation("images/mouse2.png","images/mouse3.png")
    tomsmiling= loadAnimation("images/cat4.png")
    jerrystanding= loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom= createSprite(820,600,30,20)
     jerry= createSprite(200,600,30,20)
     // adding intial images
     tom.addImage(tomsimg)
     jerry.addImage(jerrysimg)
     // scaling the images
     tom.scale= 0.2
     jerry.scale= 0.15
     tom.setCollider("circle",0,0,50)
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        tom.addAnimation("smiling",tomsmiling)
        tom.changeAnimation("smiling")
        jerry.addAnimation("standing",jerrystanding)
        jerry.changeAnimation("standing")
        tom.velocityX=0
    }

   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === UP_ARROW){
   jerry.addAnimation("teasing",jerryteasing)
   jerry.changeAnimation("teasing")
   tom.addAnimation("walking",tomswalking)
   tom.changeAnimation("walking")
   tom.velocityX=-2
  }



}
