<?php

if (isset($_POST["signup-submit"])) {
    
    require_once "dbh.php";
    require_once "functions.php";

    $loginEmail = $_POST["email-input"];
    $userName = $_POST["username-input"];
    $pwd = $_POST["password-input"];

    if(emptyInputSignup($loginEmail, $userName, $pwd) !== false){
        header("location:../login.html#register?error=emptyinput");
        exit();
    }
    if(invalidUid($userName) !== false){
        header("location:../login.html#register?error=invaliduid");
        exit();
    }
    if(invalidEmail($loginEmail) !== false){
        header("location:../login.html#register?error=invalidemail");
        exit();
    }
    if(uidExists($conn, $userName, $loginEmail) !== false){
        header("location:../login.html#register?error=usernametaken");
        exit();
    }
    if(passTooShort($pwd) strlen < 6){
        header("location:../login.html#register?error=passwordtooshort");
        exit();
    }

    createUser($conn, $loginEmail, $userName, $pwd);
    
}
else {
    header("location:../login.html");
    exit();
}

?>