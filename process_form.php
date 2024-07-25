<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_form_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle file uploads
$target_dir = "uploads/";
$photo = $target_dir . basename($_FILES["photo"]["name"]);
$ktp = $target_dir . basename($_FILES["ktp"]["name"]);
$kk_photo = $target_dir . basename($_FILES["kk-photo"]["name"]);
$ijazah = $target_dir . basename($_FILES["ijazah"]["name"]);

move_uploaded_file($_FILES["photo"]["tmp_name"], $photo);
move_uploaded_file($_FILES["ktp"]["tmp_name"], $ktp);
move_uploaded_file($_FILES["kk-photo"]["tmp_name"], $kk_photo);
move_uploaded_file($_FILES["ijazah"]["tmp_name"], $ijazah);

// Insert data into the database
$stmt = $conn->prepare("INSERT INTO contact_submissions (name, email, phone, birthplace, birthdate, nik, kk, ayah, ibu, photo, ktp, kk_photo, ijazah, address, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssssssssss", $name, $email, $phone, $birthplace, $birthdate, $nik, $kk, $ayah, $ibu, $photo, $ktp, $kk_photo, $ijazah, $address, $message);

// Set parameters and execute
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$birthplace = $_POST['birthplace'];
$birthdate = $_POST['birthdate'];
$nik = $_POST['nik'];
$kk = $_POST['kk'];
$ayah = $_POST['ayah'];
$ibu = $_POST['ibu'];
$address = $_POST['address'];
$message = $_POST['message'];

$stmt->execute();
echo "New record created successfully";

$stmt->close();
$conn->close();
?>