function setup() {
  createCanvas(1000, 750);
  background('coral')
  noLoop()
  x=100;y=150
  //n=[6,1,7,4]//Kaprekar 
  //n=[1,2,3,4]
  n=[2,7,1,9]//taxi-cab number (Ramanujam)
  result=[]
  stp=[6,1,7,4]
   entry=0
  big=0
  small=0
  repeat=true
  kount=0
  frameRate(1)
  done=false
  sr=1//serial number for all printouts
  myBox=createInput()
  myBox.input(myHandler)
  myBox.position(230,90)
  
  addr1="http://srbee.github.io/srbee/"
  linkText1="Back To Main Menu"
  mantra="_blank"
  link1=createA(addr1,linkText1,mantra)
  link1.position(400,8)
  link1.style("font-size", 15+"px");
  addr2="https://en.wikipedia.org/wiki/Kaprekar_number"
  linkText2="What is a Kaprekar Number?"
  mantra="_blank"
  link2=createA(addr2,linkText2,mantra)
  link2.position(350,30)
  link2.style("font-size", 20+"px");
  
}//end of funciton setup()

function draw() {
   myText()
}//end of function draw()

function sepDigits(n,d){
  //number is passed as n
  //digits are deposited in array   digits[]
  //print('number received='+n)
  sr++
  nStr=n.toString()//.toString() is a method
  len=nStr.length//.length is th property
  len1=len-1
  i=0
  // ===================================
  //to clear the d[] array 
  // this takes care of the case when diff bet
  // big and small is of 3 digits
  for(k=0;k<4;k++){d[k]=0}
  // ===================================
  while(i < (len)){
    d[i]=int(n/(10**(len1-i)))
    n=n-d[i]*10**(len1-i)
    i=i+1
  }//end of while loop
  //print('array returned='+d)
}//end of function sepDigits()

function kaprekar_done(){
  kount++
  //sr++
  //y=y+30
  push();textSize(16);fill('blue')
  if(kount==1){
    text(sr+')'+' You have given following four numbers::   '+n,x,y)
  }
  pop()
  n.sort()
  last=n.length
  //print('n='+n,'last= '+last)
  //y=y+30
   
  for(i=0;i<4;i++){
    big  =big  + n[3-i]*10**(3-i)
    //note n[] is now sorted!
    small=small+n[i]*10**(3-i)
     
  }//end of for loop 
 
  y=y+30
  push();stroke('red');textSize(15)
  text(sr+')'+' Bigest integer ='+big+ ' :::: Smallest integer ='+small,x,y)
  pop()
  diff=big-small
  y=y+30
  push();stroke('blue');textSize(15)
  text(sr+')'+' Difference between Biggest and Smallest = '+diff,x,y)
  pop()
  sepDigits(diff,n)
  y=y+30
  push();fill('aqua');strokeWeight(2);textSize(15)
  
  text(sr+')'+' New Sequence of Numbers ::'+n,x,y)
 // y=y+30
  pop()
  
   big =0
   small=0
   
  if(y >600){x=500;y=150}
  
  if( JSON.stringify(n)==JSON.stringify(stp) ){
    return true}
  
}//end of function karpekar()
function myHandler(){
  if(this.value()==0){
    background('coral');
    myText1()
    return
  }
   digits=this.value().length 
  //print('you entered '+this.value())
  if(digits==4){
    entry=this.value()
  }//end of if
  
    for(kk=1;kk<10;kk++){
     if((entry==1111*kk) ){
        background('coral');
        myText1()
        return
      }//end of if
    }
  
  
  if(digits==4){ 
    sr=0;kount=0
    background('coral')
    myText()
    sepDigits(this.value(),n)
  while(!kaprekar_done()){ 
    //wait while Kaprekar is being converging
   }
  //After kaprekar is done 
  push();textSize(15);stroke('red');strokeWeight(1)
  text('Reached Karpekar Number::::'+6174,x,y+30);
  text('Program Stopped',x,y+50);
  pop()
  x=100;y=150//check whether this is required
  }
}//end of function myHandler()
 

function gen4digits(){
   
  for(i=0;i<4;i++){
    n[i]=round(random(1,9))
  }
  while(n[0]==n[1]){
    n[1]=round(random(1,9))
  }//end of while
  
  while(n[1]==n[2]){
    n[2]=round(random(1,9))
  }//end of while
  
  while(n[2]==n[3]){
    n[3]=round(random(1,9))
  }//end of while
  
}//end of function gen4digits

function myText(){
  push();fill('BlueViolet');textSize(18)
  text('Enter a four digit integer',30,106)
  pop()
}//end of myText()
  
function myText1(){
  push();fill('BlueViolet');textSize(18)
  text('Enter a four digit integer',30,106)
  push();fill('red')
  text('Repeated digits are not a valid input',30,136)
  pop()
  pop()
}//end of myText() 
  
  
  