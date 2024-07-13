//OrangeTurtle.js
//By: Samuel Schmitz
var dom, x, y, finalx = 300, finaly = 300;
var maxTop = 375; var minTop = 300; var maxLeft = 375; var minLeft = 300;
function initImg() {
  dom = document.getElementById("angryTurt").style;
  var x = dom.left;
  var y = dom.top;
  x = x.match(/\d+/);
  y = y.match(/\d+/);
  moveImgR(x, y);
}

function moveImg(x, y) {
  if(x != finalx) {
    if (x > finalx) {x--;}
    else if (x < finalx) {x++;}
  }
  if(x != finaly) {
    if(y > finaly) {y--;}
    else if (y < finaly) {y++;}
  }
  dom.left = x + "px";
  dom.top = y + "px";
  setTimeout("moveImg("+ x +", "+ y +"), 100");
}

function moveImgR(x, y) {
  x++;
  dom.left = x + "px";
  if (Number(x) == maxLeft){
    setTimeout("moveImgD("+ x +","+ y +"), 100");
  }
  else {
    setTimeout("moveImgR("+ x +", "+ y +"), 100");
  }
}

function moveImgD(x, y) {
  y++;
  dom.top = y + "px";
  if (Number(y) == maxTop) {
    setTimeout("moveImgL("+ x +", "+ y +"), 100");
  }
  else {
    setTimeout("moveImgD("+ x +", "+ y +"), 100");
  }
}

function moveImgL(x, y) {
  x--;
  dom.left = x + "px";
  if (Number(x) == minLeft) {
    setTimeout("moveImgU("+ x +", "+ y +"), 100");
  }
  else{
    setTimeout("moveImgL("+ x +", "+ y +"), 100");
  }
}

function moveImgU(x, y) {
  y--;
  dom.top = y + "px";
  if (Number(y) == minTop) {
    setTimeout("moveImgR("+ x +", "+ y +"), 100");
  }
  else {
    setTimeout("moveImgU("+ x +", "+ y +"), 100");
  }
}
