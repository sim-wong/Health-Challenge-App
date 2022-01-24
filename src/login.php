<?php

if (isset($_POST["login-submit"])) {
    
    require_once "dbh.php";
    require_once "functions.php";

    $loginEmail = $_POST["email-input"];
    $pwd = $_POST["password-input"];

    if(emptyInputLogin($loginEmail, $pwd) !== false){
        header("location:../login.html#register?error=emptyinput");
        exit();
    }

    loginUser($conn, $loginEmail, $pwd);   
}
else {
    header("location:../login.html");
    exit();
}

?>
