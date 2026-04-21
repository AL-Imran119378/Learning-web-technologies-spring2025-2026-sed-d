<?php
$file = $_FILES['file'];

$allowed = ['jpg', 'jpeg', 'png'];
$filename = $file['name'];
$filesize = $file['size'];

$ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

if (!in_array($ext, $allowed)) {
    echo "Only JPG, JPEG, PNG allowed<br>";
} elseif ($filesize > 4 * 1024 * 1024) {
    echo "File size must be less than 4MB<br>";
} else {
    echo "File uploaded successfully";
}
?>