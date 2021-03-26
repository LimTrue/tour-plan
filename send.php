<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое Обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";
$title = "Новый Best Tour Plan email";
$body1 = "
<h2>Новый email</h2>
<b>Отправленный Email:</b> $email<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'besttourplan789@gmail.com'; // Логин на почте
    $mail->Password   = '5454lolZ'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('besttourplan789@gmail.com', 'Rob Bob'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('titanoviischnaps@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body . $body1;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
if(isset($_POST['email'])){
    // если есть что-то в $_POST['email']
    $body = 'User mail: ' . $_POST['email'];
    header('Location: thanks.html');
} else {
    // если нет, отправлена форма с телефоном и пр.
    $body1 = 'name: ' . $_POST['name'] . ' <br />';
    $body .= 'phone: ' . $_POST['phone'] . ' <br />';
    $body .= 'message: ' . $_POST['message'] . ' <br />';
    header('Location: thankyou.html');
}
