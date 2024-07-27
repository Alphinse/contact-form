<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root"; // default username for MySQL
    $password = ""; // default password for MySQL
    $dbname = "portfolio"; // your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO registrations (fullname, birthplace, birthdate, nis, nisn, nik, kk, phone, email, photo, ktp, kk_photo, ijazah, alamat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssssss", $fullname, $birthplace, $birthdate, $nis, $nisn, $nik, $kk, $phone, $email, $photo, $ktp, $kk_photo, $ijazah, $alamat);

    // Set parameters and execute
    $fullname = $_POST["fullname"];
    $birthplace = $_POST["birthplace"];
    $birthdate = $_POST["birthdate"];
    $nis = $_POST["nis"];
    $nisn = $_POST["nisn"];
    $nik = $_POST["nik"];
    $kk = $_POST["kk"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $alamat = $_POST["alamat"];

    // File upload handling
    $target_dir = "uploads/";
    $photo = $target_dir . basename($_FILES["photo"]["name"]);
    $ktp = $target_dir . basename($_FILES["ktp"]["name"]);
    $kk_photo = $target_dir . basename($_FILES["kk-photo"]["name"]);
    $ijazah = $target_dir . basename($_FILES["ijazah"]["name"]);

    move_uploaded_file($_FILES["photo"]["tmp_name"], $photo);
    move_uploaded_file($_FILES["ktp"]["tmp_name"], $ktp);
    move_uploaded_file($_FILES["kk-photo"]["tmp_name"], $kk_photo);
    move_uploaded_file($_FILES["ijazah"]["tmp_name"], $ijazah);

    // Execute the prepared statement
    $stmt->execute();

    echo "New record created successfully";

    $stmt->close();
    $conn->close();
}
?>
