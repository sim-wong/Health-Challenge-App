<?php

$serverName = "sql200.epizy.com"; //InfinityFree
$dBUsername = "epiz_30850591";
$dBPassword = "bH9tghSnrCuORlP";
$dBName = "epiz_30850591_healthchallenge01";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>