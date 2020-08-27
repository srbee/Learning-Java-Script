//==== Global variables ======
//pmY = []//len =8
//sig = []//len=8
//N = pmY.length
//N=32
//xs = -200;
//ys = -220;; //starting coods
//xx = []; // xposition holder
//eps = 10; // tolerance

//backgnd = [255, 255, 0]
//foregnd = [255, 0, 0]
//var x = [0]
//Xcos = [];
//Xsin = [];
//Xmag = [];
//Xph = []

//=========================
//===== setup() ==========
function setup() {
  
  createCanvas(800,600);
  backgnd = [255, 255, 0]
  foregnd = [255, 0, 0]
  var x = [0]
  Xcos = [];sig=[]
  Xsin = [];
  Xmag = [];
  Xph = []
  pmY=[];sig=[]
  xx = []; // xposition holder
  eps = 10; // tolerance
  N=9
  xs=-width/2.1;ys=-height/4
  //xs=0;ys=0
  angleMode(DEGREES)
  background(backgnd)
  initSig()

}
//========================

//========== draw() =======================================
function draw() {

  translate(width/2, height/2)
  
  dispSig()
  myDFT(sig)
  print('Xmag= ' + Xmag)
}; // end of function draw()
//=================================================
function dispSig() {
  mY = (mouseY - (height / 2))
  if (mY < -358) {
    mY = -358
  } //restrict height within graph
  if (mY > -82) {
    mY = -82
  } // restrict height within graph
  //print('mY='+mY)
  mx = mouseX - width / 2;
  for (i = 0; i < N; i++) {
    xx[i] = xs + i * 30 // hori spacing
    ellipse(xx[i], ys, 5)
    line(xx[i], ys, xx[i], ys - 140) //vert lines up
    line(xx[i], ys, xx[i], ys + 140) //vert lines down

    line(xs, ys - 20 * i, xs + N * 26, ys - 20 * i) //horiz lines up
    line(xs, ys + 20 * i, xs + N * 26, ys + 20 * i) //horiz lines dn
  }; //end of for loop for plotting small circles
  for (i = 0; i < N; i++) {
    dx = abs(xx[i] - mx)

    if (dx < eps) {

      ellipse(xx[i], ys, 10);
      push()
      strokeWeight(9); //did the trick!
      stroke(backgnd)
      line(xx[i], ys, xx[i], pmY[i]) //signal bar
      pop()
      push()
      stroke(foregnd)
      strokeWeight(4)
      line(xx[i], ys, xx[i], mY) //signal bar
      pop()
      pmY[i] = mY; // y decreses upwords !
      sig[i] = -(mY - ys);
    }; // end of if block
  }; //end of for loop

}; //end of function dispSig()

function initDFT() {
  for (i = 0; i < N; i++) {
    Xcos[i] = 0;
    Xsin[i] = 0;
    Xmag[i] = 0;
  }; // end of for loop
}//end of function initDFT()

function initSig() {
  for (i = 0; i < N; i++) {
    sig[i] = 0;
    
  }; // end of for loop
}//end of function initSig()



function myDFT(signal)

{
  print(signal)
  initDFT()

  for (m = 0; m < N; m++) {
    for (n = 0; n < N; n++) {
      //print(n,signal[n])
      // angleMode(DEGREES) therefore argument of trigometric
      // functions is interpreted to be in degrees
      Xcos[m] = Xcos[m] + signal[n] * cos(degrees(2 * PI * m * n) / N);
      Xsin[m] = Xsin[m] - signal[n] * sin(degrees(2 * PI * m * n / N));
      //
    }; // end of inner for loop
    Xmag[m] = sqrt(Xcos[m] ** 2 + Xsin[m] ** 2)
    Xph[m] = atan2(Xsin[m], Xcos[m])
    Xmag[m]=round(Xmag[m])
  }; // end of outer for loop

}; //end of funciton dft()