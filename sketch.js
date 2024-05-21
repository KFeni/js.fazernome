function setup() {
  createCanvas(400, 400);
  background("yellow");
}

function draw() {
  fill("orange");
  stroke("red");
  
  if(mouseIsPressed){
    rect(mouseY, mouseX, 20, 35);
    }
}
