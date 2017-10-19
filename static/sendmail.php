<?php 

$recepient = "sunliveua@gmail.com";
$sitename = "Fashion";
$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
// $email = trim($_POST["user_email"]);


// $message = "Имя: $name \n Телефон: $phone \n Email: $email ";
$message = "Имя: $name\nТелефон: $phone";

$title = "Новая заявка с сайта \"$sitename\" ";

mail($recepient, $title, $message);

header('location: https://dev.indresser.com');