 function setup() {
  createCanvas(800, 600);
  //createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  r = 100;
  rcPeak=100
  ang = 0;
  dir = 1;
  a = 0
  mag3=0
  //phSeq=1
  frameRate(10)
  
  addr2="https://en.wikipedia.org/wiki/Rotating_magnetic_field"
  linkText2="Rotating Magnetic Field"
  mantra="_blank"
  link2=createA(addr2,linkText2,mantra)
  link2.position(300,45)
  link2.style("font-size",25+"px")
  
  addr1="https://srbee.github.io/srbee/"
  linkText1="Back To Main Menu"
  mantra="_blank"
  link1=createA(addr1,linkText1,mantra)
  link1.position(350,15)
  link1.style("font-size",15+"px")
  
  slider1=createSlider(.5,5,2,.002)
  slider1.position(10,150)
  
  
  radio = createRadio();
  radio.option('Clockwise', 1);
  radio.option('Anti-Clockwise', -1);
  //radio.option('Single Phasing',2)
  radio.style('width', '60px');
  textAlign(CENTER);
  radio.position(30,50)
  radio.selected('-1')
  //radio.changed(myHandler)
  
  cbox = createCheckbox('Single Phasing', false);
  cbox.changed(cBoxHandler);
  cbox.position(100,70)
   
}//end of function setup()

function draw() {
  //background(160, 0, 0, 25);//original
  //background(160, 0, 0, 80);
  background(16, 200, 160, 80);
  translate(width / 2, height / 2);
  //print(frameRate())
  ellipse(0, 0, 10)
  
  //print('rcPeak='+rcPeak)
  //print('cbox='+cbox.ckecked)
  phSeq=radio.value()
  

  ang=ang+slider1.value()//decides the speed of rotation
  ra = r * sin(ang);
  rb = r * sin(ang - phSeq*120);
  
  rc = rcPeak * sin(ang + phSeq*120);

   
  ax = ra * cos(0)   ;ay = rb * sin(0);
  bx = rb * cos(120) ;by = rb * sin(120);
  cx = rc * cos(240);cy = rc * sin(240);
  magB=sqrt(bx*bx+by*by)
  magC=sqrt(cx*cx+cy*cy)
  strokeWeight(5)
  push()
  //stroke(255, 0, 0)
  stroke('red')
  arrow(0, 0, ax, ay)
  pop()
  push()
  stroke(255, 255, 0)
  //stroke('yellow')
  arrow(0, 0, bx, by)
  pop()
  push()
  stroke(0, 0, 255)
  arrow(0, 0, cx, cy)
  pop()
  push()
  stroke(0, 255, 0)
  strokeWeight(10)
  // (ax+bx+cx,ay+by+cy) <-- +ve sequence 
  dx=ax+bx+cx;dy=ay+by+cy
  mag3=sqrt(dx*dx+dy*dy)
  //print('mag3='+round(mag3))
  arrow(0, 0, dx, dy)
  pop()
  push();strokeWeight(1)
  push();stroke('red')
  circle(0,0,2.07*ax)
  pop()
  push();stroke("yellow")
  circle(0,0,2.07*magB)
  pop()
  push();stroke('blue')
  circle(0,0,2.07*magC)
  pop()
  push();stroke('green')
  circle(0,0,2.07*mag3)
  pop()
  fill(255,255,0,10)
  //pop()
  push();stroke('red');textSize(18)
  text('F l u x',dx+0.2*dx,dy+0.2*dy)
  pop()
  myTitle()
} //  end of draw()

function arrow(x1, y1, x2, y2) {

  dx = x2 - x1;
  dy = y2 - y1;
  m = sqrt(dx * dx + dy * dy);
  a = (atan2(dy, dx));
  aPI = a + 180;
  a1 = aPI + 30;
  a2 = aPI - 30;
  x3 = x2 + 0.2 * m * cos(a1);
  y3 = y2 + 0.2 * m * sin(a1);
  x4 = x2 + 0.2 * m * cos(a2);
  y4 = y2 + 0.2 * m * sin(a2);
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x2, y2, x4, y4);
  //print(x3,y3,x4,y4)
  //print('dx=',dy/dx)
  
  //myTitle()
}; // end of function arrow()

function myTitle(){
  push();
  stroke('yellow');
  fill('blue')
  strokeWeight(2);textSize(18)
  //text('Amplitude of (flux)r , (flux)y , (flux)b = '+r,width/180,height/2.5)
  text('Magnitude of Rotating Flux = '+round(mag3),width/180,height/2.2)
  text('Frequency',-width/2.5,-height/5.2)
  push();noStroke();fill('red')
  text('flux-R=100 sin(w t )',-width/3,height/10)
  pop()
  if(phSeq==1){
    push();noStroke();fill('yellow')
    text('flux-Y=100 sin(w t -120 )',-width/3,height/5)
    pop()
    push();noStroke();fill('blue')
    text('flux-B='+rcPeak+'sin(w t + 120)',-width/3,height/3)
    pop()
   }else{
     push();noStroke();fill('yellow')
     text('flux-Y=100 sin(w t +120 )',-width/3,height/5)
     push();noStroke();fill('blue')
     text('flux-B='+rcPeak+' sin(w t -120)',-width/3,height/3)
     pop()
     pop()
   }
  pop()
   
}//end of function myTitle()

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}//end of function windowResized()

function myHandler(){
  phSeq=radio.value()
}//end of function myHandler()


function cBoxHandler(){
  if(this.checked()){rcPeak=0}
  else{rcPeak=100}
}//end of cBoxHandler