<?php
$current = $_POST['current'];
$new = $_POST['new'];
$retype = $_POST['retype'];

if ($current == $new) {
    echo "New password cannot be same as current password<br>";
} elseif ($new != $retype) {
    echo "New password and retype password do not match<br>";
} else {
    echo "Password changed successfully";
}
?>