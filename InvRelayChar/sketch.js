// Initialize global the variables here
// In this template the following functions have been collected
//============================================================
// function Polar(xstart,ystart,r,theta) <<< This is a class
// usage Vr= new Polar(0,0,100,0) ;
// Vr.disp() is a method in class Polar()
// Vr.disp() retuns coods of end point
// ============================================================
// function mySliders() 
// This is called from setup. also defined are slider1.changed() etc
// statement like value=slider1.value() will be in the main function draw()
//=============================================================
// function my(y)
// returns -y to correct for wierd native cood system
//=============================================================
// function myAxes() <<< draws x and y axis
//============================================================
//function arrow(x1,y1,x2,y2) <<< arrow from (x1,y1) to (x2,y2)
//=============================================================
//function phasor(sx,sy,M,theta)
// draws arrow from (sx,sy) of length M @?/_theta
//=============================================================
function setup() {
  //createCanvas(600, 500);
  createCanvas(displayWidth, displayHeight);
  background('yellow')// background color
  stroke('blue')// foreground color
  fill('green')
  textSize(16)
  strokeWeight(1)// thickness
  angleMode(DEGREES)// <<<< This is a must <<<<<<<
  textSize(20)
  mySliders()
  // Initialize your variables here
  Ir=1;step=0.01
  xscale=80;yscale=50
  yy=-height/2+height/10
  xx=-width/2+width/10
  x1=0;y1=0;x2=0;y2=0;x3=0;y3=0
  pIr=0;k=0
};// end of mandatory function setup()
//==<><><><><><><><><><><><><><><><><><><><><><><><><><><>
//==<><><><><><><>function Draw()<><><><><><><><><><><><><><>
//==<><><><><><><><><><><><><><><><><><><><><><><><><><><>
function draw() {
  //background(220);
  translate(width/2,height/2)
  myAxes()
  myTitle()
  
  Ir = Ir+step// Ir=PSM  =Ir/plugSetting
  //print('Ir='+round(Ir))
  pIr=pIr+step*100
  
  TMS1=s1.value()//IDMT
  TMS2=s2.value()//Inv
  TMS3=s3.value()// V Inv
  
  t1=((0.14)*(TMS1))/((Ir**0.02)-1)//IDMT
  t2=((13.5)*(TMS2))/((Ir**1)-1)// Inv
  t3=((80)*(TMS3))/((Ir**2)-1)//V Inv
  
 
  
  x1=Ir*xscale// x-axis is common for all
  
  px1=pIr*xscale
  // IDMT
  x1=x1+xx;
  px1=px1+xx
  
  y1=t1*yscale ;y1=my(y1+yy) // IDMT
  y2=t2*yscale ;y2=my(y2+yy) //Inv
  y3=t3*yscale;y3=my(y3+yy) // V Inv
  
  //plotting of the three characteristics
  push();stroke('red')  ;circle(x1,y1,5);pop()//IDMT
  push();stroke('green');circle(x1,y2,5);pop()//Inv
  push();stroke('blue') ;circle(x1,y3,5);pop()// VInv
  
  
  if (abs(Ir-10)<0.001)
  { circle(x1,my(yy),5)//mark at PSM=10 on x-axis
    text('PSM='+round(Ir),x1-40,my(yy-35))//show PSM=10 on x-axis
    
    push();stroke('red')
    text(round(t1*100,3)/100+' sec',xx,y1)//show time =3 on y-axis for IDMT
    line(x1,my(yy),x1,y1)//x-axis to IDMT 
    line(x1,y1,xx,y1)// IDMT to y-axis
    pop()
   
    push();stroke('green')
    text(round(t2*100,3)/100+' sec',xx,y2)//show time =2 on y-axis for inv
    line(x1,my(yy),x1,y2)//x-axis to inv 
    line(x1,y2,xx,y2)// inv to y-axis
    pop()
   
    push();stroke('blue')
    text(round(t3*100,3)/100 +' sec',xx,y3)//show time =3 on y-axis for IDMT
    line(x1,my(yy),x1,y3)//x-axis to IDMT 
    line(x1,y3,xx,y3)// IDMT to y-axis
    pop()
  
  }
  
  
   if(Ir >20 ){
     myRedraw()
     //These graphs are normally shown up to PSM=20
   }
 
  //q=round(x1/100)*100
  //print(q)
  //line(q-13,my(yy),q-13,my(yy-20))
  
   line(px1,my(yy-20),px1,my(yy+20))
  zq=px1+xx+944
  zq=1+zq/80
  //print(zq)
   text(zq,px1,my(yy-20))
  
}// end of mandatory function draw()
  //===============================

 

function mySliders(){
  sMin=0.1;sMax=1;sDefault=1;sStep=.1
  s1=createSlider(sMin,sMax,sDefault,sStep)
  s1.position(10,20)
  s1.style('width','80px')
  s1.changed(s1Changed)
  
  
  s2=createSlider(sMin,sMax,sDefault,sStep)
  s2.position(10,60)
  s2.style('width','80px')
  s2.changed(s2Changed)
  
  s3=createSlider(sMin,sMax,sDefault,sStep)
  s3.position(10,100)
  s3.style('width','80px')
  s3.changed(s2Changed)
  
}// end of function mySlider()

function s1Changed(){
   myRedraw()
}//end of function s1Changed

function s2Changed(){
    myRedraw()
}//end of function s1Changed

function s3Changed(){
    myRedraw()
}//end of function s1Changed

function myRedraw(){
  background('yellow')
  Ir=1
}//end of function myRedraw()


//========== User defined functions follow

 function my(y)
{ 
  return(-1*y)
  // This is to because y decreases upwards
}// end of function my(y)
//==========================================

function myAxes(){
 
  line(-width/2,my(yy),width/2,my(yy))//x-axis
  line(xx,my(height/2),xx,my(-height/2))//y-axis
  
}//end of function myCoods()

function myTitle(){
text("Inverse OC  Relay Characteristics",-width/5.2,-height/2.5)
  text("==========================",-width/5.2,-height/2.7)
  text("t_IDMT = (0.14)/(PSM^0.02) -1",-width/6,-height/2.9)
  text("t_Inv     = (13.5)/(PSM^1   ) - 1",-width/6,-height/3.2)
  text("t_VInv   = (80)  /(PSM^2     ) -1",-width/6,-height/3.7)

  push();stroke('red');text('TMS(IDMT)='+s1.value(),-width/2.01,-height/2.1);pop()
  push();stroke('green');text('TMS(Inv)='+s2.value(),-width/2.01,-height/2.35);pop()
  push();stroke('blue');text('TMS(VInv)='+s3.value(),-width/2.01,-height/2.68);pop()
  text('--- PSM --->',xx+width/2,my(yy-40))
  push()
  //translate(-width/2,-height/2)
  rotate(-90)
  text('- - Operating Time - - ',xx+width/3,my(yy+height/.91))
  pop()
}//end of function myTitle()
 


