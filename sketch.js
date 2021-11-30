var backimg;
var paraimg;
function preload(){
backimg = loadImage("assets/bg.png")
paraimg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(900,500)

}

function draw() {
  background(backimg)
  addAnimation(paraimg)
        
}