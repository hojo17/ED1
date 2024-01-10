//adding a gif to my grid

let gif:
	
function preload (assets/HenryJohnsonGIF.gif)

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  fill('magenta');
}

function draw() {

background ('red')

  var num = 50
  var sidelen = windowWidth/num
  
  for(var y = 0; y < windowHeight; y = y + sidelen)
    {
    
  for(var x = 0; x < windowWidth; x = x + sidelen)
  {
image (gif, x, y, sideLen, sideLen)
  }
    }
 
}


function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}

