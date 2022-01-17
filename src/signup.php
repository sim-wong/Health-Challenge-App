<html>
<link rel="stylesheet" type="text/css" href="src/login.css">
</html>

<?php

if (isset($_POST["submit"])) { //check if the user accessed this page in proper method. 
    
    $loginEmail = $_POST["loginEmail"];
    $userName = $_POST["userUid"];
    $pwd = $_POST["pwd"];

    require_once 'dbh.php';
    require_once 'function.php';

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
    header("location:../login.html#register");
    exit();
}

?>

<script src="src/login.js"></script>