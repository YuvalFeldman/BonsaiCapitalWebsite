<!--
	Created by Yuval Feldman
    Website: yuvalfeldman.com \ feldmanyuval.com
    GitHub: https://github.com/YuvalFeldman
-->

<?php 
    $_POST = json_decode(file_get_contents('php://input'), true);

    $myemail = 'feldmanyuval@gmail.com';
//    $myemail = 'uri@bonsaicapital.net';

    $name = $_POST['name']; 
    $email_address = $_POST['mail']; 
    $message = $_POST['message']; 

	$to = $myemail; 
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers); 
?>