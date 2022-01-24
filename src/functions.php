<?php

function emptyInputSignup($loginEmail, $userName, $pwd) {
    $result; 
    if(empty($loginEmail || $userName || $pwd)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result; 
}

function invalidUid($userName) {
    $result; 
    if(!preg_match("/^[a-zA-Z0-9]*$/", $userName)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result; 
}

function invalidEmail($loginEmail) {
    $result; 
    if(!filter_var($loginEmail, FILTER_VALIDATE_EMAIL)) {
        $result = true;
    }
    else {
        $result = false;
    }

    return $result; 
}

function uidExists($conn, $loginEmail, $userName) {
    $sql = "SELECT * FROM users WHERE usersUid = ? OR usersEmail = ?;";
    $stmt = mysqli-stmt_init($conn); //creating a prepared statement (stmt) for security purposes
    if (mysqli_stmt_prepare($stmt, $sql)){
        header("location:../login.html#register?error=stmtfailed");
        exit();
}

    mysqli_stmt_bind_param($stmt, "ss", $userName, $loginEmail);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)){
        return $row;
    }
    else {
        $result = false;
        return $result
    }

    mysqli_stmt_close($stmt);

function uidExists($conn, $loginEmail, $userName, $pwd) {
    $sql = "INSERT INTO users (usersEmail, usersUid, usersPwd) VALUES (?, ?, ?);";
    $stmt = mysqli-stmt_init($conn); //creating a prepared statement (stmt) for security purposes
    if (mysqli_stmt_prepare($stmt, $sql)){
        header("location:../login.html#register?error=stmtfailed");
        exit();
    }

    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt, "sss", $loginEmail, $userName, $hashedPwd);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location:../login.html#login?error=none");
    exit();
}

function emptyInputLogin($loginEmail, $pwd) {
    $result; 
    if(empty($loginEmail || $pwd)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result; 
}

function loginUser($conn, $loginEmail, $pwd) {
    $uidExists = uidExists($conn, $loginEmail, $loginEmail)

    if ($uidExists === false) {
        header("location: ../login.php?error=wronglogin");
        exit();
    }
}

$pwdHashed = $uidExists["usersPwd"];
$checkPwd = password_verify($pwd);

if($checkPwd === false) {
    header("location: ../login.php?error=wrongpassword");
        exit();
}
else if ($checkPwd === true) {
    session_start();
    $_SESSION["userid"] = $uidExists["usersId"];
    $_SESSION["useruid"] = $uidExists["usersUId"];
    header("location:../sprite.html");
    exit();
}
?>