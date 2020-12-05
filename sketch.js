var playerPaddle, computerPaddle;

function setup() {
  createCanvas(400,400);
  playerPaddle=createSprite(100,200,50,50);
  playerPaddle.shapeColor="red";
  playerPaddle.debug=true;

  computerPaddle=createSprite(200,200,50,50);
  computerPaddle.shapeColor="blue";
  computerPaddle.debug=true;

}

function draw() {
  background("cyan");  

playerPaddle.x=mouseX;
playerPaddle.y=mouseY;

if(playerPaddle.x-computerPaddle.x<computerPaddle.width/2+playerPaddle.width/2&&computerPaddle.x-playerPaddle.x<computerPaddle.width/2+playerPaddle.width/2&&playerPaddle.y-computerPaddle.y<computerPaddle.height/2+playerPaddle.height/2&&computerPaddle.y-playerPaddle.y<computerPaddle.height/2+playerPaddle.height/2){
playerPaddle.shapeColor="blue";
computerPaddle.shapeColor="red";


}

else{
  playerPaddle.shapeColor="red";
  computerPaddle.shapeColor="blue";


}

  drawSprites();
}