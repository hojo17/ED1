	let gif;
	
	function preload(){
	gif = loadImage ('assets/circle.gif');
	}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor('assets/explore.png');
  fill('magenta');
  strokeweight(1);
  
  
}

function draw() {

 background('green');

  var num = 8;
  var sidelen = windowWidth/num;
  
  for(var y = 0; y < 2 * windowHeight; y = y + sidelen)
    {
    
  for(var x = 0; x < 2 * windowWidth; x = x + sidelen)
  {
  image (gif, x, y, sidelen, sideLen);
  
    }
 }
}


function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}

