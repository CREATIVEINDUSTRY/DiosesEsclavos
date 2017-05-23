<?php

$nombre = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$asunto = $_POST['asunto'];

$header = 'From: ' . $mail . " \r\n";
$header.= "Content-type: text/html; charset=utf-8\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$headers.= "<pochas.ca@gmail.com>\r\n";


$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Su teléfono es: " . $phone . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";


$para = 'contacto@dediosesaesclavos.com';


$send_mail = mail($para, $asunto, utf8_decode($mensaje), $header);

print ( $send_mail ) ? 'Tus Datos han sido enviados' : 'Error al enviar tus datos';

?>