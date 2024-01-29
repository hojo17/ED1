	let gif;
	
	function preload(){
	gif = loadImage ('assets/Circle.gif');
	}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('lightgrey');
  stroke('white');
  strokeWeight (1);
  
}

function draw() {

background ('255,255,255    ');

 background('green');

  var num = 50
  var sidelen = windowWidth/num;
  
  for(var y = 0; y < windowHeight; y = y + sidelen)
    {
    
  for(var x = 0; x < windowWidth; x = x + sidelen)
  {
  image (gif, x, y, sidelen, sideLen)
  
    }
 }
//noloop();
}



function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}

