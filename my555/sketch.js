// Initialize global the variables here




function setup() {
  createCanvas(600, 500);
  //background('yellow')// background color
  stroke('yellow')// foreground color
  fill('green')
  textSize(20)
  strokeWeight(1)// thickness
  frameRate(10)
  
  // Initialize the variables here
  yscale=30
  yy=[]
  z=[0];z1=[0]
  k=0
  Vcc=15
  charging=1
  Vi=0; Vf=Vcc;Tcharging=4;Tdischarging=4
  Tc=Tcharging
  Vupper=(2/3)*Vcc
  Vlower=(1/3)*Vcc
  //tstep=.01
  tstep=Tc/120
   t=0;y=0;tt=0
  Vout=0
}// end of mandatory function setup()

function draw() {
  //background(220);
  translate(width/2,height/2)
  myAxes()
  myTT()
  //text('Here ',0,0)
  //==================================================
  // Your code follows 
  Vout=Vcc
  k=k+1
  t=t+tstep

  z[k]=CD(Vi,Vf,Tc)//charging or discharging
  z1[k]=z[k]
  // z[k] is stored as z1[k] since z[k] is scaled for plotting 
  
  slope=z1[k]-z1[k-1]

  
  z[k]=z[k]*yscale
  z[k]=z[k]-height/2
  x=-width/2+(t/tstep)*(1.5)
  push()
  stroke('red')
  circle(x,my(z[k]),5)
  pop()
  
  yy=20*yscale-(height/2)
  push();stroke('green')
  line((-width/2),my(yy),width/2,my(yy))
  text("5 5 5 T i m e r  I C ",-100,my(230))
  pop()

  if ( (slope > 0) && (charging==1) && ( z1[k] > Vupper ))
  { 
    charging=0// hence discharging
    ss=my(Vcc*yscale-height/2)
    line(x,ss,x,0+height/2)
    // Vi:initial value, Vf:final value ; Tc=Time Constant
    Vi=Vupper, Vf=0,Tc=Tdischarging
    tt=0
  } // end of if block
   
  if ( (slope < 0) &&(charging==0)  && (z1[k] < (Vlower)) )
  { 
    charging=1// hence charging
    line(x,ss,x,0+height/2)
    
    // Vi:initial value, Vf:final value,Tc:Time Constant
    Vi=Vlower;Vf=Vcc;Tc=Tcharging
    tt=0
  } // end of if block
  if (charging==1) { Vout=Vcc}
  if(charging==0)  {Vout=0}
  qqq=(Vout*yscale)-height/2
  circle(x,my(qqq)-5,5)
  
  if(x > 300){
    x=0
    t=0;tt=0;k=0
    background('black')
    // code for starting again should go here
    
  }
  
//=====================================================
//==== End of your code inside draw() =================
//=====================================================
}// end of mandatory function draw()

//==== User defined functions follow ==================

function CD(vi,vf,Tc){
  //print("inside function CD")
  
  tt=tt+tstep
  
  return (vi+(vf-vi)*(1-exp(-tt/Tc)))
  
  }//end of function CD
//===================================================
function my(y)
 { 
  return(-1*y)// 'cause y decreases upwards!
 }// end of function my(y)
//====================================================
function myAxes()
{
  push()
  strokeWeight(5)
  stroke('blue')
  line(-width/2,my(-height/2),width/2,my(-height/2))
  line(-width/2,my(height/2),-width/2,my(-height/2))
  pop()
  
}//end of function myAxes
function myTT(){
// for drawing linesof upper and lower trigg voltages
  push()
  stroke('magenta')
  vt=Vupper*yscale-(height/2)
  vl=Vlower*yscale-(height/2)
  Vcc_p=Vcc*yscale-height/2
  line(-width/2,my(vt),width/2,my(vt))
  line(-width/2,my(vl),width/2,my(vl))
  pop()
  text("Upper Trig. Level "+Vupper+"V",0,my(vt))
  text("Lower Trig. Level "+Vlower+"V",0,my(vl))
  text("Vcc="+Vcc+"V",0,my(Vcc_p))
  text(0+"V",0,my(-height/2))
  text("Output",-width/2,my(Vcc_p)+20)
}//end of function myTT()

function mousePressed() {
  noLoop();
}//end of function mousePressed()

function mouseReleased() {
  loop();
}// end of funciton mouseReleased()





