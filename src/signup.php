<?php

if (isset($_POST["submitBtn"])) {
    echo "It works";
}
else {
    header("location:login.html");
}