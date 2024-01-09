function setup() {
  createCanvas(720, 720);
  background('blue');
  strokeWeight(8);
  
  fill('yellow');
}

function draw() {

  translate (60,60);
  quad (
  0,0,
  300,0,
  300,300,
  0,300
  
  );

}