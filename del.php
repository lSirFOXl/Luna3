<?php 
    require_once "includes/recaptchalib.php";
    $secret = "6LdhJR8UAAAAAH-AeUHm27KhV94gfpiEzuZvldGN";
    $response = null;
    $reCaptcha = new ReCaptcha($secret);

    if($_POST['g-recaptcha-response']){
        $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]);
    }
    
    if($_POST['submit'] && $response != null && $response->success){
        $sendto1 = "info@lunahost.ru";
        $sendto2 = "alex@amado-id.ru";
        
        $username = $_POST['name'];   
        $usertel = $_POST['phone'];   
        $usermail = $_POST['mail']; 
        $usertariff = "нет";
        if($_POST['tar'])
        $usertariff = $_POST['tar']; 
        $today = date("m.d.y, H:i:s");  
        
        $subject  = "Заявка";

        $headers = "Content-type: text/plain; charset = utf8\r\nFrom: info@lunahost.ru";
        
        $msg .= "Имя: ".$username."\r\n";
        $msg .= "Почта: ".$usermail."\r\n";
        $msg .= "Телефон: ".$usertel."\r\n";
        $msg .= "Тариф: ".$usertariff."\r\n"; 
        $msg .= "Дата и время: ".$today."\r\n"; 
        
        $stand_filetime = time();
        $filename = $stand_filetime;
        $file_count = 0;
        $filepath = "orders/".$filename.".txt";
        $file_ex = true;

        mail($sendto1, $subject, $msg, $headers);
        mail($sendto2, $subject, $msg, $headers);

        while($file_ex == true){
            if(file_exists($filepath)){
                $file_count++;
                $filename = $stand_filetime."-".$file_count;
                $filepath = "orders/".$filename.".txt";
            }
            else{
                $file_ex = false;
            }
        }        

        $fp = fopen($filepath, "w");
        fwrite($fp, iconv('UTF-8', 'CP1251', $msg));
        fclose($fp);

        header("Location: /?ty=1");
        exit();
    } 
?>

<!-- BEGIN: body -->
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>LunaHost</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/prepare.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/multisize.css">
    <link rel="stylesheet" href="css/custom.css">
    <link rel="stylesheet" href="css/interactive.css">
    <script src="https://www.google.com/recaptcha/api.js?onload=myCallBack&amp;render=explicit" async defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script>

        var myCallBack = function() {
            recaptcha1 = grecaptcha.render('recaptcha1', {
                'sitekey' : '6LdhJR8UAAAAAAAPAz9wzer7MFgLfRu_gxt-T1bK', 
                'theme' : 'light'
            });
            alert('asd')
        };

        

    </script>
</head>
<body>
    <div id="recaptcha1"></div>
</body>
</html>
<!-- END: body -->