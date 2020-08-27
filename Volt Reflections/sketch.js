function setup() {
  createCanvas(600, 800);
  strokeWeight(2)
  fill(220)
  xc=100,yc=200;dx=1;h=50;
  x=xc+20;dir=1;f=1;b=0;
  xspan=250;
  xmax=xc+xspan-20;xmin=xc+20;
  background(255,255,0);
  k=0;
  d=300
  yf=100//yoffset of forwd only disp
  yr=250//yoffset of rev only disp
  frameRate(60)
} // End of built-in setup() function

function draw() {
  push()
  stroke('blue')
  line(xc,yc,xc+yr,yc);// base line
  pop()
  stroke('red')
  towerLeft();
  myTitle()
  //print('b=',b)
  x= x+ dx*dir;
  if(x > (xmax) ) { dir=-1;b=b+1;}
  if(b>2){}
  //x= x+ dx*dir;
  if( (dir==1) && (f==1) ){
    x1=x;x2=x;y1=yc;y2=yc-h;
    line(x1,y1,x2,y2);
    //following code is for 
    //showing only forward TW
    
    push();strokeWeight(7)
    stroke('blue')
    line(x1,y1+yf,x2,y1+yf);//forwd TWbase line
    pop()
    
    push();stroke('yellow')
    strokeWeight(5)
    line(x1,y1+yf,x2,y2+yf);
    //line(x1,y1+yf,x2,y1+yf);//forwd TWbase line
    pop()
    push();stroke('red')
    strokeWeight(1)
    line(x1,y1+yf,x2,y2+yf);
     
    
    pop()
    push();strokeWeight(4)
    //followng removes an artifact at the end
    if(x==xmax){
      stroke('yellow')
    line(x1,y1+yf,x2,y2+yf);
    }//end of if
  }
  
  if ((dir==-1) && (b==1) ){ 
    x1=x;y1=yc;x2=x;y2=yc-2*h;
    line(x1,y1,x2,y2);
  
    push();strokeWeight(7)
    stroke('blue')
    line(x1,y1+yr,x2,y1+yr);//rev only base line
    pop()
    
    push();stroke('yellow')
    strokeWeight(5)
    line(x1,y1+yr,x2,y2+yr);
    pop()
    //following code is for showing
    // reflected wave
    push();strokeWeight(5)
    stroke('yellow')
    line(x1,y1+yr,x2,y1+yr);
    pop()
    
    push();stroke('red')
    strokeWeight(2)
    
    line(x1,y1+yr,x2,y2+h+yr);
    pop()
    
    if(x<xmin){
    stroke('yellow')
    line(x1,y1+yr,x2,y2+h+yr);
    }//end of if
     
  }
  
  //------------------
  if ((dir==-1) && (b==2) ){ 
    //+++++++++
    push();strokeWeight(7)
    stroke('blue')
    line(x1,yc+yf,x2,yc+yf);//forwd TWbase line
    pop()
    
    //+++++++
    
    
    stroke('yellow')
    //x1=x;y1=yc;x2=x1;y2=yc-h;
    x1=x;y1=yc;x2=x1;y2=yc+h*dir;
    //line(x1+dx,y1,x2+dx,y2);
    line(x1,y1,x2,y2+h*dir);//eating red from end to start
    //following code is for
    //showing inverted reverse TW
    push();strokeWeight(5)
    stroke('yellow')
    line(x1,y1,x2,y2+250-2*h*dir);
    pop()
    
    //+++++
    push();strokeWeight(7)
    stroke('blue')
    line(x1,yc+yr,x2,yc+yr);//forwd TWbase line
    pop()
    
    //==========
    
    
    push();strokeWeight(2)
    stroke('red')
    line(x1,y1+yr,x2,y2+yr-2*h*dir);
    pop()
    
    if(x<xmin){
    stroke('yellow')
    line(x1,y1+yr,x2,y2+yr-2*h*dir);  
    }//end of if
    
  }
  
  
  //-----------------------------
  if( x<xmin) { dir=1;f=f+1}
  //if ( f > 2  ) { noLoop() }
  if(f>2){dir==1;f=1;b=0}
  if  ( ( dir==1) && (f==2) ) {  
     
    push();strokeWeight(7)
    stroke('blue')
    line(x1,yc+yf,x2,yc+yf);//forwd TWbase line
    pop()
    
    
    
    
    stroke('yellow')
    x1=x;y1=yc-h;x2=x1;y2=yc-2*h;
    //shaving off top half while going forwd
    line(x1,y1,x2,y2)
    
    //following code is for
    //forwd only display
    push();strokeWeight(5)
    stroke('yellow')
    line(x1,y1+yf+h,x2,y1+4*h)
    pop()
    
    push();strokeWeight(2)
    stroke('red')
    line(x1,y1+yf+h,x2,y1+4*h)

    pop()
    
    
  }
  //print(b)
  
}// End of buit-in draw() function
  function towerLeft(){
  xta=xc;   yta=yc+50;
  xtb=xta;   ytb=yta+100;
  xtc=xc-10,ytc=ytb;
    
  triangle(xta,yta+d,xtb,ytb+d,xtc,ytc+d);//left tower
  xca=xta;yca=yta+10;xcb=xc;ycb=yca+10;xcc=xcb+20  ;ycc= ycb  ;
  triangle(xca,yca+d,xcb,ycb+d,xcc,ycc+d);// left cross arm
    
  xna=xcc;yna=ycc+3;xnb=xna-5 ; ynb=yna+5  ; xnc=xna+5  ; ync=ynb  ;
  triangle(xna,yna+d,xnb,ynb+d,xnc,ync+d) ;// left insulator
  ellipse(xnb+5,ynb+3+d,5)
  line(xnb+5,ynb+3+d,xnb+5,ynb+20+d);//connector for battery
  line(xnb+5,ynb+20+d,xnb-3,ynb+25+d);
  
  line(xnb+5,ynb+30+d,xnb-5,ynb+20+d)// switch
  line(xnb+5,ynb+30+d,xnb+5,ynb+40+d);// vertical line down
  line(xnb-5,ynb+40+d,xnb+15,ynb+40+d);
  line(xnb-2,ynb+45+d,xnb+12,ynb+45+d);
  line(xnb+5,ynb+45+d,xnb+5,ynb+70+d);// vertical line down
    
  xxta=xc+xspan;      yyta=yc+50;
  xxtb=xc+xspan;      yytb=yta+100;
  xxtc=xc+xspan+10;  yytc=ytb;
  triangle(xxta,yyta+d,xxtb,yytb+d,xxtc,yytc+d);// left insulator
    
  line(xtc,ytc+d,xxtc,yytc+d);// tower base line 
    
  xxca=xc+xspan;yyca=yyta+10;xxcb=xc+xspan;
  yycb=yyca+10;xxcc=xxcb-20  ;yycc= ycb  ;
  triangle(xxca,yyca+d,xxcb,yycb+d,xxcc,yycc+d);// left cross arm 
    
  xxna=xxcc;yyna=yycc+3;xxnb=xxna-5 ; 
  yynb=yyna+5  ; xxnc=xxna+5  ; yync=yynb  ;
  triangle(xxna,yyna+d,xxnb,yynb+d,xxnc,yync+d) ;// right insulator
  ellipse(xxnb+5,yynb+3+d,5)
  line(xnb,ynb+3+d,xxnb,yynb+3+d)
  //push()  
  //textSize(30)
  //text('Voltage reflections on an OC\n    transmission line',10,50)
  //pop()  
  
  }//end of tower left

function myTitle(){
  
  
  push()  ;stroke('blue')
  textSize(30)
  text('Voltage reflections on an OC\n         transmission line',10,30)
  pop()  
  push()  ;stroke('blue')
  textSize(15)
  text('Ref. : Electric Power Systems [5th Ed],\n Weedy et al., pp[375]',100,670)
  pop() 
  push() ;stroke('blue') 
  textSize(15)
  text('    Line\n Voltage',20,200)
  pop()  
  
  
  
  push()  
  textSize(15);stroke('blue')
  text('Forward \nTravelling Wave',25,300)
  pop()  

  push()  
  textSize(15);stroke('blue')
  text('Reverse\n Travelling Wave',25,450)
  pop()  
  
  push()  
  textSize(15);stroke('blue')
  text('+ V',140,620)
  text('OC',310,620)
  pop()  
  
  push()  
  textSize(15)
  stroke('blue')
  //noStroke()
  text('Sending End',90,550)
  text('Receiving End',300,550)
  pop()  
   
  
  push()  
  textSize(15);stroke('blue')
  text('<--distance -->',170,220)
  text('+2 V',70,100)
  text('+ V',80,150)
  pop()  
  
  
  
}//end offunction  myTitle()
