<?php // for this to work I would have to set up a mail server on my local computer

$email = $_POST[""];
$name = $_POST["names"];
$tele = $_POST["tele"];
$message = $_POST["body"];

mail ("moore.matts@yahoo.ca" , $name , "Name: $name\nEmail: $email\nTelephone: $tele\n\n$message");
// using my email for example purposes

?>
