<?php 

$recepient = "sunliveua@gmail.com";
$sitename = "dresses.indresser.com";
$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
// $email = trim($_POST["user_email"]);


// $message = "Имя: $name \n Телефон: $phone \n Email: $email ";
$message = "Имя: $name\nТелефон: $phone";

$title = "Заказ консультации с лендинга \"$sitename\" ";

mail($recepient, $title, $message);


// header('Спасибо за заявку, мы вам перезвоним');
echo('спасибо');
// header('location: https://dev.indresser.com');