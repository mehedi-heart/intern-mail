<?php


if(isset($_POST["submit"])){
   $fname = $_POST["fname"];
   $subject = $_POST["subject"];
   $email = $_POST["email"];
   $phone = $_POST["phone"];
   $textarea = $_POST["textarea"];
    
    $message = "Full name : " .  $fname . " Email : " . $email . "Phone : " .  $phone . " message : " . $textarea ;
    
   if(  mail("mehedihasan1479@gmail.com", $subject,$message)){
    echo"your mail is send, thank you";
  }else{
      echo"your mail is not send";
  }
    
}
    


?>