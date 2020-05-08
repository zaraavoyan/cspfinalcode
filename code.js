let dcgan;
let button;
let smallPoint, largePoint;
var rpressed = false;
var ipressed = false;

function preload(){
  dcgan = ml5.DCGAN('model/geo/manifest.json');
}

function setup() {
  createCanvas(370, 370);
  button = createButton('Generate!');
  button.mousePressed(generate);
  button.position(width/2 -20 ,height + 20);
 
  button2 = createButton ('Impressionize!');
  button2.mousePressed(impressionize);
   button2.position(width/2 -20 , height + 40);
  
  button3 = createButton ('Stop!');
  button3.mousePressed(stop);
      button3.position(width/2 -20 ,height + 60);
  //.mousePressed(()  => pressed = true);
  // .mouseReleased(() => pressed = false);
  // button2.mouseClicked(pointilize);

  button4 = createButton('Randomize!');
  button4.mousePressed(pressrandomize);
  button4.position(width/2-150, height +20);
  // imp();
   smallPoint = 6;
  largePoint = 28;
  mediumPoint = 20;
  
  noStroke();
}

function impressionize() {
    ipressed=true;
    rpressed=false;
}

function pressrandomize() {
    rpressed=true;
    ipressed=false;
}

function stop() {
  
       rpressed=false;
       ipressed=false;
  
}

function generate() {
  dcgan.generate(displayImage);
}

function randomize() {
   let pointillize = map(mouseX, 0, width, smallPoint, mediumPoint);
  let x = floor(random(canvas.width));
  let y = floor(random(canvas.height));
  let pix = get(x/2, y/2);
  fill(pix, 105);
  ellipse(x, y, pointillize, pointillize);
}

function displayImage(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  image(result.image, 0, 0, 370, 370);
}

function pointilize() {
    let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(canvas.width));
  let y = floor(random(canvas.height));
  let pix = get(x/2, y/2);
  fill(pix, 255);
  ellipse(x, y, pointillize, pointillize);
}


// function imp() {
//    pointilize();
// }


function draw() {
if (ipressed) {
pointilize();
} else if (rpressed) 
  randomize();
  
  
 }

