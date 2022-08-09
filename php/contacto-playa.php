<?php

$name = $_POST["name"];
$email = $_POST["email"];
$msg_subject = $_POST["msg_subject"];
$message = $_POST["message"];

$body = "";
$body .= "Nombre: ";
$body .= $name;
$body .= "<br>";
$body .= "E-mail: ";
$body .= $email;
$body .= "<br>";
$body .= "Asunto: ";
$body .= $msg_subject;
$body .= "<br>";
$body .= "Mensaje: ";
$body .= $message;
$body .= "<br>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
	$mail->Host = 'localhost';
	$mail->SMTPAuth = false;
	$mail->SMTPAutoTLS = false;
	$mail->Port = 25;

    //Recipients
    $mail->setFrom('luis.rlwev@gmail.com', $name);
    $mail->addAddress('luis.rlwev@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contacto Intimísimo Playa del Carmen';
    $mail->Body    = $body;
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "El mensaje no se pudo enviar. Mailer Error: {$mail->ErrorInfo}";
}