//SGOS.js
//BY: Samuel Schmitz
function flipImag() {
  var dom = document.getElementById("orange").style;
  if(dom.visibility =="visible") {
    dom.visibility = "hidden";
  }
  else {
    dom.visibility = "visible";
  }
}

function moveIt(movee, newTop, newLeft) {
  dom = document.getElementById(movee).style;
  if (Number(newTop) < 280 || Number(newTop) > 600) {
    alert("Please select a y-coordinate greater than or equal to 280\n"
  + "and less than 600");
  }
  else{
    if (Number(newLeft) < 0|| Number(newLeft) > 1000) {
      alert("Please choose a x-coordinate greater than 0\n" +
    "and less than 1000");
    }
    else{
      dom.top = newTop + "px";
      dom.left = newLeft + "px";
    }
  }
}
