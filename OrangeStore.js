//OrangeStore.js
//By: Samuel Schmitz
function setColor(where, newColor) {//changes the color of either the foregroud or the background
  if(where == "background") {
    switch (newColor) {
      case "darkGray":
        document.body.style.backgroundColor = "#3d3d3d";
        break;
      case "green":
        document.body.style.backgroundColor = "#3eaf76";
        break;
      case "red":
        document.body.style.backgroundColor = "red";
        break;
      case "blue":
        document.body.style.backgroundColor = "blue";
        break;
    }
  }
  else{
    switch (newColor) {
      case "ivory":
        document.body.style.color = "ivory";
        break;
      case "purple":
        document.body.style.color = "#121154";
        break;
      case "orange":
        document.body.style.color = "#ff8c00";
        break;
      case "yellow":
        document.body.style.color = "yellow";
        break;
    }
  }
}
