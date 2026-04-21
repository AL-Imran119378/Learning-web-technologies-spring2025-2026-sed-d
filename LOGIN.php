<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'] ?? "";
    $password = $_POST['password'] ?? "";

    // Username validation
    if (!preg_match("/^[a-zA-Z0-9._-]+$/", $username)) {
        echo "Invalid Username format<br>";
    } elseif (strlen($username) < 2) {
        echo "Username must be at least 2 characters<br>";
    } else {
        echo "Username OK<br>";
    }

    // Password validation
    if (strlen($password) < 8) {
        echo "Password must be at least 8 characters<br>";
    } elseif (!preg_match("/[@#$%]/", $password)) {
        echo "Password must contain @, #, $ or %<br>";
    } else {
        echo "Password OK<br>";
    }

    // Remember Me
    if (isset($_POST['remember'])) {
        echo "Remember Me selected<br>";
    } else {
        echo "Remember Me not selected<br>";
    }
}

?>