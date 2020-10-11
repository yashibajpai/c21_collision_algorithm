var mr, fr

function setup() {
  createCanvas(800,400);
  mr= createSprite(400, 200, 80, 50);
  fr = createSprite(200,200, 50, 80);
  mr.shapeColor = "green";
  fr.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  mr.x = mouseX;
  mr.y = mouseY;
  
  if (istouching(mr,fr)){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  else {
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }
  drawSprites();
  
  
}

function istouching (ob1, ob2){
  if (ob1.x - ob2.x < ob1.width/2 + ob2.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob2.width/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2
    && ob1.y - ob2.y < ob1.height/2 + ob2.height/2)
    {
      return true
    }
    else {
      return false
    }
}