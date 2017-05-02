//pong

var pong1;
var paddle1,paddle2;

var paddle1Go, paddle2Go;
var dir1,dir2;

var p1Score, p2Score;

var menuScreen;

function setup() {
  createCanvas(500, 300);
  frameRate(30);
  pong1 = new ballThing();
  paddle1 = new paddles(width/18);
  paddle2 = new paddles(17*width/18);
  
  p1Score = 0;
  p2Score = 0;
}

function draw() {
  noStroke();
  fill(0,0,0);
  rectMode(CORNERS);
  rect(0,0,width,height);
  stroke(255);  
  line(width/2,0,width/2,height);
  pong1.updatePong();
  pong1.display();
  paddle1.display();
  paddle2.display();
  
  
  if (paddle1Go) {
    paddle1.movePaddle(dir1);
  }
  if (paddle2Go) {
    paddle2.movePaddle(dir2);
  }
  
  text(p1Score,width/2-20,height/20);
  text(p2Score,width/2 +15,height/20); 
}

function ballThing() {
  
  this.speedx = 1;
  this.speedy = 1;
  this.xPos = width/2;
  this.yPos = height/2;
  this.pongWidth = 5;
   
  
  this.getX = function() {return this.xPos;}
  this.getY = function() {return this.yPos;}

  this.updatePong = function() {
    this.xPos += this.speedx;
    this.yPos += this.speedy;
    if (this.yPos <0 || this.yPos > height) {
      this.speedy *= -1.05;
    }
    if (this.xPos < -30 || this.xPos > width+30) {
      if (this.xPos <-30) {
        p2Score++;
      } else {
        p1Score++;
      }
      
      this.xPos = width/2;
      this.yPos = height/2;
    }
    this.collisionDetect();
  }

  this.collisionDetect = function() {
    
    var xPaddle, yPaddle; 
    var widthPaddle,heightPaddle;
    if (this.xPos>width/2) {
      this.xPaddle = paddle2.getX();
      this.yPaddle = paddle2.getY();
      this.widthPaddle = paddle2.getWidth()/2;
      this.heightPaddle = paddle2.getHeight()/2;
      
    } else {
      this.xPaddle = paddle1.getX();
      this.yPaddle = paddle1.getY();
      this.widthPaddle = paddle1.getWidth()/2;
      this.heightPaddle = paddle1.getHeight()/2;
    }
    if (this.yPos <= this.yPaddle + this.heightPaddle && this.yPos >= this.yPaddle - this.heightPaddle ) {
      if (this.xPos >= this.xPaddle - this.widthPaddle && this.xPos <= this.xPaddle + this.widthPaddle) {
        if(this.speedx < this.paddleWidth) {
          this.speedx *= -1.1; 
          this.speedy *= 1.1;
        } else {
          this.speedx *= -1;
        }
        
      }
    }
  }
  
  this.display = function() {
    stroke(255);
    fill(255);
    rectMode(CENTER);
    rect(this.xPos,this.yPos,this.pongWidth,this.pongWidth); 
  }
  
};

function paddles(_xPos) {
  
  var xPos,yPos;
  var paddleLong = 30;
  var paddleWide = 5;
  var paddleRate = 5;
  
  xPos = _xPos;
  yPos = height/2;
  
  this.movePaddle = function(dir) {
    if(yPos +paddleLong/2  + dir< height && yPos -paddleLong/2 + dir > 0) {
      yPos += dir*paddleRate;
    }
  }
 
  this.getX = function() {
    return xPos;  
  }
  this.getY = function() {
    return yPos;  
  }
  
  this.getWidth = function() {
    return paddleWide;  
  }
  this.getHeight = function() {
    return paddleLong;  
  }
 
  this.display = function() {
    
    stroke(255);
    fill(255);
    rectMode(CENTER);
    rect(xPos,yPos,paddleWide,paddleLong);
  }
};

function keyPressed() {
  if (key == 'q' || key == 'Q') {
    paddle1Go = true;
    dir1 = -1;
  } else
  if (key == 'z' || key == 'Z') {
    paddle1Go = true;
    dir1 = 1;
  } else
  if (key == 'i' || key == 'I') {
    paddle2Go = true;
    dir2 = -1;
  } else
  if (key == 'm' || key == 'M') {
    paddle2Go = true;
    dir2 = 1;
  }
  
  if (key == 'g' || key == 'G') {
    if (menu) {
      menu = false;
    } else {
      menu = true;
    }
  }
  return false;
}

function keyReleased() {
  
  if (key == 'q' || key == 'Q') {
    paddle1Go = false;
  } else
  if (key == 'z' || key == 'Z') {
    paddle1Go = false;
  } else
  if (key == 'i' || key == 'I') {
    paddle2Go = false;
  } else
  if (key == 'm' || key == 'M') {
    paddle2Go = false;
  }
  return false;
}
