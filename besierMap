//Make a Bezier Curve and move it around.
//By Scott Wasilewski 12/13/2017
int controlNumber = 10;
PVector[] controlPoint = new PVector[controlNumber];
float tIncrement = 0.001;
int selected;

void settings() {
  size(1200, 600);    
}

void setup() {
  
  //Define starting points 
  for(int i = 0; i<controlNumber; i++) {
    controlPoint[i] = new PVector(random(width), random(height));
  }
  
  stroke(100,110,110);
  background(60); 

  //Display Points
  for(int i = 0; i<controlNumber-1; i++) {
    strokeWeight(1);
    line(controlPoint[i].x,controlPoint[i].y,controlPoint[i+1].x,controlPoint[i+1].y);
    strokeWeight(10);
    point(controlPoint[i].x,controlPoint[i].y);    
  } 
  point(controlPoint[controlNumber-1].x,controlPoint[controlNumber-1].y);
  calcCurve();
}

//keep the show running
void draw() {}

//Calculate and display the Bezier Curve
void calcCurve() {
  float curveSumX = 0;
  float curveSumY = 0;
  float bern;
  
  stroke(100,225,220);
  strokeWeight(1);
  for(float t=0; t<=1; t+=tIncrement) {
    curveSumX=0;
    curveSumY=0;
    for(int i=0; i<controlNumber; i++) {
      bern = calcBernstein(i,controlNumber-1,t);      
      curveSumX += bern*controlPoint[i].x;
      curveSumY += bern*controlPoint[i].y;
    }
    println("X: "+ curveSumX + "Y: " + curveSumY);
    point(curveSumX,curveSumY);
  }

}

//Calculate Bernstein Polynomial
static float calcBernstein(int i, int n, float t) {
  return (fact(n)/(fact(n-i)*fact(i)) * pow(t,i) * pow((1-t),(n-i)));
}

//recursive factorial calculator
static int fact(int num) {
  return num <= 1? 1 : fact(num - 1)*num;
}



//Add some mouse business
void mousePressed() {
  println("ouch");
  for(int k=0; k<controlNumber;k++) {
    if(mouseX>controlPoint[k].x-10 && mouseX<controlPoint[k].x+10 && mouseY>controlPoint[k].y-10 && mouseY<controlPoint[k].y+10) {
      selected = k;
      println(selected);
    }
  }

}

void mouseDragged() {
  controlPoint[selected].x = mouseX;
  controlPoint[selected].y = mouseY;

  stroke(0,120,0);
  background(60); 

  //Display Points
  for(int i = 0; i<controlNumber-1; i++) {
    strokeWeight(1);
    line(controlPoint[i].x,controlPoint[i].y,controlPoint[i+1].x,controlPoint[i+1].y);
    strokeWeight(10);
    point(controlPoint[i].x,controlPoint[i].y);    
  } 
  point(controlPoint[controlNumber-1].x,controlPoint[controlNumber-1].y);
  
  //uncomment next line if you've got some screaming processing power (or the number of control points are low
  //calcCurve();
}

void mouseReleased() {
  stroke(100,110,110);
  background(60); 

  //Display Points
  for(int i = 0; i<controlNumber-1; i++) {
    strokeWeight(1);
    line(controlPoint[i].x,controlPoint[i].y,controlPoint[i+1].x,controlPoint[i+1].y);
    strokeWeight(10);
    point(controlPoint[i].x,controlPoint[i].y);    
  } 
  point(controlPoint[controlNumber-1].x,controlPoint[controlNumber-1].y);
  calcCurve();
}

