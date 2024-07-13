<!DOCTYPE html>
<!-- OrderForm.php - Processes the form decribed in OrderFormPHP.html
-->
<html lang = "en">
<head>
  <title>Process the OrderFormPHP.html form</title>
  <meta charset="utf-8" />
  <link rel ="stylesheet" href = "css/OrangeStore.css">
  <style type = "text/css" >
  td, th, table {
    border: thin solid ivory;
  }
  </style>
</head>
<body>
  <p><?php
  function chkName($theName) {
    if(preg_match("/^[A-Z][a-z]+,\s[A-Z][.]?,\s[A-Z][a-z]+$/", $theName) != True) {
      echo "Name format incorrect" ;
      return False ;
    } else {
      return True ;
    }
  }

  function chkAddress($theAddress) {
    if(preg_match("/^\d+\s[A-Z][a-z]+\s[A-Z][a-z]+$/", $theAddress) != True) {
      if (preg_match("/^\d+\s[A-Z][a-z]+$/", $theAddress) != True) {
        echo "Address format incorrect <br />
        please use the format (First, Middle_initial, Lastname" ;
        return False ;
      } else {
        return True ;
      }
    } else {
      return True ;
    }
  }

  function chkCardNum($cardNum) {
    if(preg_match("/\d{4}[-]\d{4}[-]\d{4}[-]\d{4}/", $cardNum) != True) {
      if (preg_match("/\d{16}/", $cardNum) != True) {
        echo "Credit Card Number Format is incorrect <br />
        Please use the format (####-####-####-####)" ;
        return False ;
      } else {
        return True ;
      }
    } else {
      return True ;
    }
  }

  function chkPhoneNum($phoneNum) {
    if(preg_match("/^\d{3}[-]\d{3}[-]\d{4}$/", $phoneNum) != True) {
      if (preg_match("/^\d{3}[.]\d{3}[.]\d{4}$/", $phoneNum) != True) {
        if (preg_match("/^\d{10}$/", $phoneNum) != True) {
          echo "Phone Number Format is incorrect <br />
          Please use the form(###-###-####)" ;
          return False ;
        } else {
          return True ;
        }
      } else {
        return True ;
      }
    } else {
      return True ;
    }
  }

  function chkEMail ($eMail) {
    if(preg_match("/^\S+@\S+$/", $eMail) != True) {
      echo "Email foramt is incorrect <br />
      Please use the format(abcd@efgh)" ;
      return False ;
    } else {
      return True ;
    }
  }

  $theName = $theAddress = $cardNum = $phoneNum = $eMail = $creditCardCompany =
  $ducks = $bunnies = $turtles = $pigeons = $goats = "" ;
  $total_items = $total_price = $total_weight = "" ;
  $ducks_weight = $bunnies_weight = $turtles_weight = $pigeons_weight = $goats_weight = "" ;

  $theName = $_POST["theName"];
  $theAddress = $_POST["theAddress"];
  $cardNum = $_POST["cardNum"];
  $phoneNum = $_POST["phoneNum"];
  $eMail = $_POST["eMail"];
  $creditCardCompany = $_POST["creditCardCompany"];
  $ducks = $_POST["ducks"];
  $bunnies = $_POST["bunnies"];
  $turtles = $_POST["turtles"];
  $pigeons = $_POST["pigeons"];
  $goats = $_POST["goats"];

  if($ducks == "") $ducks = 0;
  if($bunnies == "") $bunnies = 0;
  if($turtles == "") $turtles = 0;
  if($pigoens == "") $pigeons = 0;
  if($goats == "") $goats = 0;

  $valid = True ;
  if(chkName($theName) == False) {
    $valid = False ;
  }
  if(chkAddress($theAddress) == False){
    $valid = False ;
  }
  if(chkCardNum($cardNum) == False){
    $valid = False ;
  }
  if(chkPhoneNum($phoneNum) == False){
    $valid = False ;
  }
  if(chkEMail($eMail) == False) {
    $valid = False ;
  }

  if ($valid == True) {
  $ducks_cost = 5.0 * $ducks;
  $bunnies_cost = 30.0 * $bunnies;
  $turtles_cost = 35.0 * $turtles;
  $pigeons_cost = 10.0 * $pigoens;
  $goats_cost = 50.0 * $goats;
  $total_price = $ducks_cost + $bunnies_cost + $turtles_cost +
    $pigeons_cost + $goats_cost;
  $total_items = $ducks + $bunnies + $turtles +
    $pigeons + $goats;

  $ducks_weight = 3.5 * $ducks ;
  $bunnies_weight = 5.5 * $bunnies ;
  $turtles_weight = 3.5 * $turtles ;
  $pigeons_weight = 2.0 * $pigeons ;
  $goats_weight = 150 * $goats ;
  $total_weight = $ducks_weight + $bunnies_weight + $turtles_weight +
    $pigeons_weight + $goats_weight ;
  }

  ?></p>
  <h1>The Orange Store</h1>
  <hr />
  <h4>Customer: </h4>
  <p><?php
    print ("$theName <br /> $theAddress <br /> $eMail <br />");
  ?></p>
  <hr />
  <h4>Credit Card Information: </h4>
  <p><?php
    print("$cardNum <br /> $creditCardCompany <br />");
  ?></p>
  <hr />
  <h4>Order Information</h4>
  <table>
    <tr>
      <th>Product</th>
      <th>Unit Price</th>
      <th>Unit Weight</th>
      <th>Ouantitiy Ordered</th>
      <th>Item Cost</th>
      <th>Item Weight</th>
    </tr>
    <tr>
      <td>Orange Ducks</td>
      <td>$5.00</td>
      <td>3.5lbs</td>
      <td><?php print ("$ducks"); ?></td>
      <td><?php printf ("$ %4.2f", $ducks_cost); ?></td>
      <td><?php print ("$ducks_weight"); ?></td>
    </tr>
    <tr>
      <td>Orange Bunnies</td>
      <td>$30.00</td>
      <td>5.5lbs</td>
      <td><?php print ("$bunnies"); ?></td>
      <td><?php printf ("$ %4.2f", $bunnies_cost); ?></td>
      <td><?php print ("$bunnies_weight"); ?></td>
    </tr>
    <tr>
      <td>Orange Turtles</td>
      <td>$35.00</td>
      <td>3.5lbs</td>
      <td><?php print ("$turtles"); ?></td>
      <td><?php printf ("$ %4.2f", $turtles_cost); ?></td>
      <td><?php print ("$turtles_weight"); ?></td>
    </tr>
    <tr>
      <td>Orange Pigeons</td>
      <td>$10.00</td>
      <td>2.0lbs</td>
      <td><?php print ("$pigeons"); ?></td>
      <td><?php printf ("$ %4.2f", $pigeons_cost); ?></td>
      <td><?php print ("$pigeons_weight"); ?></td>
    </tr>
    <tr>
      <td>Orange Goats</td>
      <td>$50.00</td>
      <td>150.0lbs</td>
      <td><?php print ("$goats"); ?></td>
      <td><?php printf ("$ %4.2f", $goats_cost); ?></td>
      <td><?php print ("$goats_weight"); ?></td>
    </tr>
  </table>
  <h4>Total: </h4>
  <p>
  <?php
  print ("Your total number of items ordered is: $total_items<br />") ;
  printf ("Your total cost is: $ %5.2f <br />", $total_price) ;
  print ("Your total shipping weight is $total_weight <br />") ;
  ?>
</p>
</body>
</html>
