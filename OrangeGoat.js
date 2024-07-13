//OrangeGoat.js
//By: Samuel Schmitz
var topp = "goat4";

function toTop(newTop) {
  var domTop = document.getElementById(topp).style;
  var domNew = document.getElementById(newTop).style;
  domTop.zIndex = "0";
  domNew.zIndex = "10";
  topp = newTop
}
