<?php

$serverName="localhost:8080";
$dbUsername="root";
$dBPassword="";
$dBName="healthchallenge01";

$conn = mysqli_connect($serverName, $dbUsername, $dBPassword, $dBName);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>