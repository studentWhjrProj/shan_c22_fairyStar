var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	// create fairy using createSprite 
	// next addAnimation 
	// and give scale value as 0.25 to it.

	

	engine = Engine.create();
	world = engine.world;

	// create a starBody as a circular body using Matter.Bodies.circle(x,y,radius,options)
	// options - restitution:0.5 and isStatic:true
	
	
	World.add(world, starBody);
	
	

}


function draw() {
  background(bgImg);

  Engine.update(engine);

  
  star.x= starBody.position.x 
  // write the y axis of star corresponding to starBody.position.y (refer the above line)
 



  if(star.y > 470 && starBody.position.y > 470 ){
  		// Write the statement to set the isStatic property to false for the starBody
		// using Matter.Body.setStatic(varBody,true); 
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
	// write the if condition for LEFT_ARROW to move the fairy towards the left
      

	
	if (keyCode === DOWN_ARROW) {
		// Write the statement to set the isStatic property to false for the starBody
		// using Matter.Body.setStatic(varBody,false); 
	
	}
}
