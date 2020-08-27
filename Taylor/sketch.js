function setup() {
  dW=displayWidth,dH=displayHeight
  createCanvas(dW, dH);
  background('yellow')
  angleMode(radians)
  astep=PI/36
  sign=1
  ang=0
  A=100
  minTerms=1;maxTerms=10;defaultValue=2;step=1
  slider = createSlider(minTerms,maxTerms,defaultValue,step);
  slider.position(dW/10, dH/6);
  slider.style('width', '80px');
  slider.changed(myRefresh)
}// end of built-in setup() function

function myRefresh(){
  background('yellow')
  ang=0
}// end of function myRefresh()

function fact(n) {
  if (n==0) {return 1}else{return n*fact(n-1)} 
}// end of my function fact() 

function mySin(x,terms){
  k=-1
  sum=0
  for(i=1;i<(2*terms);i=i+2){
    k=k+1
    sign=((-1)**(k))
    num=x**i
    den=fact(i)
    sum=sum+((sign)*(num/den))
    }// end of for loop
  return sum
}// end of mySin() function

function draw() {
  
  translate(dW/2,dH/2)
  let nTerms = slider.value();
  textSize(20)
  stroke('red')
  text("Sine wave with limited number of terms in the Tayor Series ",-dW/2.1,-dH/2.2)
  text("sin(x)=x-(x^3)/3!+(x^5)/5!-(x^7)/7!+...",-dW/2.45,-dH/2.5)
  text("No. of terms in Taylor Series  =  "+nTerms,-dW/2.45,-dH/2.95)
  
  offset=-10
  line(-width/2,-offset,width/2,-offset)
  ang=ang+astep
  x=-width/2+ang*100
  y=offset+A*mySin(ang,nTerms)
  y1=offset+A*sin(ang)
  
  push();fill('red') ;circle(x,-y,10) ;pop()
  push();fill('blue');circle(x,-y1,10);pop()
  
  if (ang > 2*PI) {background('yellow');ang=0}
  
} // end of draw()