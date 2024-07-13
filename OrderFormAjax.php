<?php
$cityState = array("50622" => "Denver, Iowa",
                   "50631" => "Frederika, Iowa",
                   "50647" => "Janesville, Iowa",
                   "50666" => "PlainField, Iowa",
                   "50668" => "Readlyn, Iowa",
                   "50674" => "Sumner, Iowa",
                   "50676" => "Tripoli, Iowa",
                   "50677" => "Waverly, Iowa",
                   );
header("Content-Type: text/plain");
$zip = $GET["zip"];
if (array_key_exists($zip, $cityState))
  print $cityState[$zip];
else
  print " , ";
?>
