

// Initialize global the variables here
function setup() {
	
  frameRate(60)
  mySliders()
  var canvas=createCanvas(900, 500);
  canvas.parent('sketch-div')
  Vcc=15;Vupper=(2/3)*Vcc;Vlower=(1/3)*Vcc
  xscale=.5;yscale=30
  Vf=Vcc;
  myPoint=2
  yy=[]
  
  background('black')// background color
  stroke('yellow')// foreground color
  fill('green')
  textSize(20)
  strokeWeight(1)// thickness
  osc=new p5.Oscillator('sine')
  osc.amp(1)
  init()
  Tc=Tcharging
  tstep=Tc/60
  
  //osc.start()
  
}// end of mandatory function setup()

function draw() {
  //background(220);
  translate(width/2,height/2)
  
  myAxes()
  myTT()
  
  Vout=Vcc
  k=k+1
  t=t+tstep

  z[k]=CD(Vi,Vf,Tc)//charging or discharging
  z1[k]=z[k]
  // z[k] is stored as z1[k] since z[k] is scaled for plotting 
  
  slope=z1[k]-z1[k-1]

  
  z[k]=z[k]*yscale
  z[k]=z[k]-height/2
  //xscale below
  x=-width/2+(t/tstep)*xscale
  push()
  stroke('red')
  circle(x,my(z[k]),myPoint)
  pop()
  
  yy=20*yscale-(height/2)
  push();stroke('green')
  line((-width/2),my(yy),width/2,my(yy))
  //text("5 5 5 T i m e r  I C ",-100,my(230))
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
  
  
  if(x > 0.1*width){
    
    x=0
    t=0;tt=0;k=0
    background('black')
    //osc.start()
    //print('ch tc='+Tcharging,'dischg tc='+Tdischarging)
    
    // code for starting again should go here
    
  }
  
 
}// end of function draw()


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
  strokeWeight(1)
  stroke('blue')
  line(-width/2,my(-height/2),width/2,my(-height/2))
  line(-width/2,my(height/2),-width/2,my(-height/2))
  pop()
  push()
  
  pop()
}//end of function myAxes
function myTT(){
// for drawing lines of upper and lower trigg voltages
  push()
  stroke('magenta')
  vt=Vupper*yscale-(height/2)
  vl=Vlower*yscale-(height/2)
  Vcc_p=Vcc*yscale-height/2
  line(-width/2,my(vt),width/2,my(vt))
  line(-width/2,my(vl),width/2,my(vl))
  pop()
  text("Upper Trig. Level = (2/3)Vcc = "+Vupper+"V",-10,my(vt)-5)
  text("Lower Trig. Level = (1/3)Vcc = "+Vlower+"V",-10,my(vl)-5)
  text("Vcc="+Vcc+"V",0,my(Vcc_p)-10)
  text(0+"V",0,my(-height/2))
  text("Output",-width/2,my(Vcc_p)-10)
  
  text('R1: '+rr1+' ohms',-width/2.3,-height/2.15)
  text('R2: '+rr2+' ohms',-width/3.5,-height/2.15)
  text('c: '+cc*10**6+' uF',-width/8.9,-height/2.15)
  
  
}//end of function myTT()

function mySliders(){
 r1=createSlider(1,10,5,1)
 r1.position(55,230)
  
 r2=createSlider(1000,100000,20000,1000)
 r2.position(175+20,230)  
  
 c=createSlider(1,10,2,1)
 c.position(175+(140+20),230)  
  
 r1.changed(init)
 r2.changed(init)
 c.changed(init)
  //checkbox for sound
  push();textSize(20)
  cbox=createCheckbox('Sound On/Off',false)
  pop()
  cbox.position(700,90)
  cbox.changed(boxHandler)
  
}//end of function mySliders()

function init(){
  background('black')
  //print('ch='+Tcharging,'dich='+Tdischarging) 
  rr1=r1.value()/1;
  rr2=r2.value()/1;
  cc=c.value()/(10**8)
 
  //print("r1:"+rr1,"r2:"+rr2,"c:"+cc)
  Tcharging=(rr1+rr2)*cc
  Tdischarging=rr2*cc
  T=Tcharging+Tdischarging
  //f=1/T
  f=(1.45)/((rr1+2*rr2)*cc)
  osc.freq(f)
  //osc.start(T)
  //print('TC='+Tcharging,'TD='+Tdischarging)
  //print('T:'+T,'f:'+f)
  z=[0];z1=[0]
  k=0
  charging=1
  Vi=0; Vf=Vcc
  t=0;y=0;tt=0
  Vout=0
  //Tc=Tcharging
}//end of functioninit()

function boxHandler(){
if (this.checked()){osc.start()}
     else
    {osc.stop()}

}//end of function boxHandler()

