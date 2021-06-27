var ground;
var track;
var hero
var heroImage
function preload()
{
  heroImage=loadImage("hero.png");
ground = loadImage("background-1.png");
}
function setup() {
  createCanvas(900, 800);
  track = createSprite(450,400)
  track.addImage(ground);
  track.scale=1.5;
  track.velocityY=2
  hero = createSprite(225,600);
  hero.addImage (heroImage);
  hero.scale=0.15
 
}

function draw() {

  background(0);
  //hero.x=mouseX;

 hero.x=mouseX;
  
  if(track.y>400)
  {
    track.y=300;
  }
  drawSprites();
}