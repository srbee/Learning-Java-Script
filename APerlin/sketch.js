function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  xc=width/2;yc=height/2;
  r=100;a=45;
  strokeWeight(5);k=0;
  eyes=8;phase=160;
  kount=0
  dir=1
  addr1="https://srbee.github.io/srbee/"
  link_text1="Back To Main Menu"
  link1=createA(addr1,link_text1,"_blank")
  link1.position(150,10)
  
  addr2="https://en.wikipedia.org/wiki/Perlin_noise#:~:text=Perlin%20noise%20is%20a%20type,1985%20called%20An%20image%20Synthesizer."
  link_text2="- - - - What Is Perlin Noise ?- - - - -"
  link2=createA(addr2,link_text2,"_blank")
  link2.position(125,30)
  
  
  
  
}

function draw() {
  //background(random(255),random(255),random(201),5);
  transp=30
  //background(155,225,100,transp)
  background(150,225,100,transp)
  //stroke(255,0,0,255)
  //stroke(250,250,0)
  stroke(255,255,0)
  kount=kount+1
  zz1=noise(millis())
  a=a+dir*3//CW-ACW rotation
  x=r*(cos(a));y=r*(sin(a));
  x1=r*cos(a-phase);y1=r*sin(a-phase);
  k=k+noise(k)/10
  //x=x+width/5*noise(k)
  x=x-1*dir*width/2*noise(k)
  y=y-1*dir*height/2*noise(k)
  push()
  stroke('yellow')
  pop()
  fill('blue')
  //fill(0,random(255),random(255))
  ellipse(xc+x,yc+y,eyes)
  ellipse(xc+x-eyes,yc+y,eyes)
  push();fill(25,10,255)
  ellipse(xc+x,yc+y,eyes/200)
  ellipse(xc+x-eyes,yc+y,eyes/200)
  pop()
  
  bubble(xc-1*dir*random(200),yc-1*dir*random(200))
  bubble(xc-1*dir*random(200),yc-1*dir*random(200))
  bubble(xc-1*dir*random(200),yc-1*dir*random(200))
  
  
  timeOut = ( kount > 100+random(500) )
  //timeOut is of type bool
  
  dulki(10+random(20))
  
  if(timeOut){init()}
}// end of draw()
 
function init(){
 kount=0;
 dir=dir*-1
 eyes=10+10*random()
}//end of function init()

function bubble(x,y){
  xb=+x+noise(2*second())*100;
  yb=2*y-noise(100-second())*200;
  push()
  //fill(0,255,255)
  stroke(random(255),random(255),random(255))
  ellipse(xb,yb,random())
  pop()
  
}// end of function bubble()

function dulki(zop){
  //zop=time in millisecs for sleeping
  atta=millis()
  while(millis()-atta < zop)
  {//kharrata
  }

}//end of function sleep()