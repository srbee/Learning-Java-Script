stakes0=[]
stakes1=[]
stakes2=[]
stakes3=[]
stakes4=[]
stakes5=[]
stakes6=[]
stakes7=[]
//stakes=[]
//stake0=[]
//stake1=[]
//stake2=[3,2,1]

//stakes[0]=stake0
//stakes[1]=stake1
//stakes[2]=stake2

stakes0[0]=[3,2,1]
stakes0[1]=[]
stakes0[2]=[]

stakes1[0]=[3,2]
stakes1[1]=[]
stakes1[2]=[1]

  stakes2[0]=[3]
  stakes2[1]=[2]
  stakes2[2]=[1]

  stakes3[0]=[3]
  stakes3[1]=[2,1]
  stakes3[2]=[]

  stakes4[0]=[]
  stakes4[1]=[2,1]
  stakes4[2]=[3]

  stakes5[0]=[1]
  stakes5[1]=[2]
  stakes5[2]=[3]

  stakes6[0]=[1]
  stakes6[1]=[]
  stakes6[2]=[3,2]

  stakes7[0]=[]
  stakes7[1]=[]
  stakes7[2]=[3,2,1]

k=0;
function setup() {
  createCanvas(600, 600);
  //background(255,255,0)
  angleMode(DEGREES);
  rectMode(CENTER)
  //noLoop()
  strokeWeight(2)
  frameRate(.8)
  fill(255,0,0)
  textSize(40)
  m=0
  addr1="https://en.wikipedia.org/wiki/Tower_of_Hanoi#:~:text=The%20full%20Tower%20of%20Hanoi,of%20recursion%20when%20teaching%20programming."
  link_text1="What is Towers of Hanoi?"
  link1=createA(addr1,link_text1,'_blank')
  link1.position(190,30)
  
  addr2="https://srbee.github.io/srbee/"
  link_text2="Back To Main Menu "
  link2=createA(addr2,link_text2,'_blank')
  link2.position(200,10)
}

function draw() {
  
  translate(width/2,height/2)
  
  //background(255,255,0)
  
  T=3;
  k=k+1
  //print('k= '+k)
  if(  (k>0 ) && (k<T) )  { paintPeg(stakes0,-100,0);myText('Start !')}
  if ( (k>T)  && (k<2*T)) { m++;paintPeg(stakes1,-100,0);myText('Move# 1') }
  if ( (k>2*T)  && (k<3*T)){m++;paintPeg(stakes2,-100,0);myText('Move # 2') }
  if ( (k>3*T)  && (k<4*T)){paintPeg(stakes3,-100,0);myText('Move # 3') }
  if ( (k>4*T)  && (k<5*T)){paintPeg(stakes4,-100,0);myText('Move # 4 ' ) }
  if ( (k>5*T)  && (k<6*T)){paintPeg(stakes5,-100,0);myText('Move # 5  ' ) }
  if ( (k>6*T)  && (k<7*T)){paintPeg(stakes6,-100,0);myText('Move # 6  ') }
  if ( (k>7*T)  && (k<8*T)){paintPeg(stakes7,-100,0); myText('Move # 7 ') }
  
  if(k > 8*T ) { k=0}
  //paintPeg(stakes,-100,0)
  
}// end of draw()

function paintPeg(peg,xc,yc){
 //clear()
 //background(255,220,100,200)
  clear()
  background(255,255,0)
  //clear()
  h=15;
  factor=h*5.5;
  widthFactor=30;
  //factor=55 works
  x1=xc

  for(j=0; j< peg.length;j++   ) {
        line(x1,yc,x1,yc-4*h);// pegs
  for (i=0; i< peg[j].length;i++)  {
    
    w  =(peg[j][i])*widthFactor;
    y1 =yc-(2*i+1)*(h/2);
    rect(x1,y1,w,h);// rectMode(CENTER)
    push()
    textSize(10)
    
    fill(255)
    text(w/widthFactor,x1,y1+5)
    pop()
    };// end of inner for loop
    //line(x1,yc,x1,yc-4*h)
    x1=x1+factor
    x1=x1+widthFactor*2
  }; //end of outer for loop
  line(-200,0,200,0);// base line

  };// end of paintPeg()
  
  
  function myText(s) {
    push();fill('blue')
    text('Towers of Hanoi ',-190,-200)
    pop()
    push()
    textSize(30)
    text('Stakes:   Start          Aux         Target', -250,40)
    pop()
    text(s,-150,-100)
  };// end of function 