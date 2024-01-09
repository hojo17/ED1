function setup() {
  createCanvas(720, 720);
  background('blue');
  strokeWeight(8);
  
  fill('magenta');
}

function draw() {

  translate (60,60);
  
  for(var y = 0; y < 600; y = y + 300)
    {
    
  for(var x = 0; x < 600; x = x + 300)
  {
    quad (
    x,y,
    x + 300,y,
    x + 300,300 + y,
    x,300 + y 
    )
  }
    }
 
}