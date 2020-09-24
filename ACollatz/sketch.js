function setup() {
  createCanvas(1000, 1000);
  noLoop()
  x=0;y=0
  inp = createInput('');
  inp.input(myInputEvent);
  inp.position(110,65)
  
}

function draw() {
  background('coral');
  stroke('blue')
  myTitle()
  myLinks()
  // To Do
  // add link to Wikipedia Collatz sequence 
  //print(isInteger(5))
  
  //collatz(15)
}
function myTitle(){
text('Enter an integer -->',3,80)
text('Collatz Sequence',150,60)
}//end of function myTitle()

function isInteger(n){
result=n-(int(n/2))*2
if(result ==0){return true}
  else{ return false}

}//end of function isInteger



function collatz(m){
  if(m!=1)
  {text(m+'  =>',x,y)}else{text(m,x,y)}
  
if(m==1 || m==0 ){return}else{
if (isInteger(m)){m=m/2} else{m=3*m+1}
  //print(m)
  
  x=x+50;
  if(x > 0.8*width){x=50;y=y+30}
  collatz(m)
}//end of if

}//end of function collatz()
  function myInputEvent(){
    //clear()
    background('coral')
    myTitle()
    //x=10;y=80
    init()
    collatz(abs(inp.value()))
 }//end of event hndler myInputEvent()

function init(){
x=10;y=120
}//end of function init()
  
function myLinks(){
  addr1="https://srbee.github.io/srbee/"
  linkText1="Back To Main Menu"
  mantra="_blank"
  link1=createA(addr1,linkText1,mantra)
  link1.position(width/3,20)
  
  addr2="https://en.wikipedia.org/wiki/Collatz_conjecture#:~:text=The%20Collatz%20conjecture%20is%20a,half%20of%20the%20previous%20term."
  linkText2="What is a Collatz sequence ?"
  mantra="_blank"
  link2=createA(addr2,linkText2,mantra)
  link2.position(width/3.5,70)
  
  
  
}//end of function myLinks()