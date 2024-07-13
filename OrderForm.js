//OrderForm.js
//By: Samuel Schmitz

var cardComp; var name; var address; var cardNum; var phoneNum; var eMail;

function cardChoise(cardType) {//change the cardComp when a radion button is pressed
  cardComp = cardType;
  alert("Your card company is " + cardType);
}

function chkName() {//check to see if the name entered meets the qualifications
  var theName = document.getElementById("theName");
  var pos = theName.value.search(/^[A-Z][a-z]+,\s[A-Z].?,\s[A-Z][a-z]+$/);
  if (pos != 0) {
    alert("The name you enetered is in the wrong format \n" +
  "please use the format (First, Middle_initial, Lastname)");
    return false;
  }
  else {
    return true;
  }
}

function chkAddress() {//check to see if the address entered meets the qualifications
  address = document.getElementById("theAddress");
  var pos = address.value.search(/^\d+\s[A-Z][a-z]+\s[A-Z][a-z]+$/);
  if (pos != 0) {
    pos = address.value.search(/^\d+\s[A-Z][a-z]+$/);
  }
  if (pos != 0) {//the adress does not fot the correct formating
    alert("The address entered doesn't fit the correct formatting \n" +
  "please use the format(#### Name Name) and don't abriviate street names");
    return false;
  }
  else {//the address passes all check, so return true
    return true;
  }
}

function chkCardNum() {//check to see that the cardNum meets the qualifications
  cardNum = document.getElementById("cardNum");
  var pos = cardNum.value.search(/\d{4}-\d{4}-\d{4}-\d{4}/);
  if (pos != 0) {
      var pos = cardNum.value.search(/\d{16}/);
  }
  if (pos != 0) {//if the formatting is wrong tell the user
    alert("Your credit card number is incorrect \n" +
  "Please use the format (####-####-####-####)");
    return false;
  }
  else {//passes all checks return true
    return true;
  }
}

function chkPhoneNum() {//check to see that the phoneNum meets the qualifications
  phoneNum = document.getElementById("phoneNum");
  var pos = phoneNum.value.search(/^\d{3}-\d{3}-\d{4}$/);
  if (pos != 0) {
    pos = phoneNum.value.search(/^\d{3}.\d{3}.\d{4}$/);
  }
  if (pos != 0) {
    pos = phoneNum.value.search(/^\d{10}$/);
  }
  if (pos != 0) {
    alert("The phone number you entered is not in the right format\n" +
  "Please use the form(###-###-####)");
    return false;
  }
  else {
    return true;
  }
}

function chkEMail() {//checks to see of the eMail meets the qualifications
  eMail = document.getElementById("eMail");
  var pos = eMail.value.search(/^\S+@\S+/);
  if (pos != 0) {
    alert("Email doesn't follow the correct format\n" +
  "Please use the format(abcd@efgh)");
    return false;
  }
  else {//passes all checks
    return true;
  }
}

function chkOrder() {//Makes sure that the customer ordered a correct amount
  var ducks = document.getElementById("ducks");
  var bunnies = document.getElementById("bunnies");
  var turtles = document.getElementById("turtles");
  var pigeons = document.getElementById("pigeons");
  var goats = document.getElementById("goats");
  var oTotal = 0;
  oTotal = Number(ducks.value) + Number(bunnies.value) + Number(turtles.value)
   + Number(pigeons.value) + Number(goats.value);
  if (oTotal == 0) {
    alert("Please order something");
    return false;
  }
  else {
    alert(oTotal);
    return true;
  }
}

function chkNumOrd(ord) {//verfiys that the user placed a reasonable order size for each item
  if(ord > 110 || ord < 0) {
    alert("Please enter a number between 0-110");
    return false;
  }
  else{
    return true;
  }
}

function chkDucks() {//tells the user if the number of ducks ordered is allowed
  var ducks = document.getElementById("ducks");
  return chkNumOrd(ducks.value);
}

function chkBunnies() {//tells the user if the number of bunnies ordered is allowed
  var bunnies = document.getElementById("bunnies");
  return chkNumOrd(bunnies.value);
}

function chkTurtles() {//tells the user if the number of turtles ordered is allowed
  var turtles = document.getElementById("turtles");
  return chkNumOrd(turtles.value);
}

function chkPigeons() {//tells the user if the number of pigeons ordered is allowed
  var pigeons = document.getElementById("pigeons");
  return chkNumOrd(pigeons.value);
}

function chkGoats() {//tells the user if the number of goats ordered is allowed
  var goats = document.getElementById("goats");
  return chkNumOrd(goats.value);
}
