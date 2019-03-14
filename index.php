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
    
    include_once("includes/xtemplate.class.php");
    $tplCommon = new XTemplate("tpl/index.html");
    if ($_GET['ty']) $tplCommon->parse("body.message");
    $tplCommon->parse("body");
    $tplCommon->out("body");
    unset($tplCommon);
?>