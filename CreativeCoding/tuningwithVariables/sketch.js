function setup() {
  createCanvas(windowWidth, windowHeight);
  background('blue');
  strokeWeight(1);
  
  fill('magenta');
}

function draw() {

  var num = 50
  var sidelen = windowWidth/num
  
  for(var y = 0; y < windowHeight; y = y + sidelen)
    {
    
  for(var x = 0; x < windowWidth; x = x + sidelen)
  {
    quad (
    x,y,
    x + sidelen,y,
    x + sidelen,sidelen + y,
    x,sidelen + y 
    )
  }
    }
 
}


function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}

