//OrderFormAjax.js
//By: Samuel Schmitz
function getPlace() {
  var zip = document.getElementById("zip").value;
  if (window.XMLHttpRequest){
    var xhr = new XMLHttpRequest();
  }
  else {
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      var place = result.split(', ');
      if(document.getElementById("city").value == "")
        document.getElementById("city").value = place[0];
      if(document.getElementById("state").value == "")
        document.getElementById("state").value = place[1];
    }
  }
  xhr.open("GET", "http://localhost/A10/OrderFormAjax.php?zip=" + zip, true);
  xhr.send();
}
