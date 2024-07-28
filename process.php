<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $birthplace = $_POST['birthplace'];
    $birthdate = $_POST['birthdate'];
    $nis = $_POST['nis'];
    $nisn = $_POST['nisn'];
    $nik = $_POST['nik'];
    $kk = $_POST['kk'];
    $nama_ayah = $_POST['nama-ayah'];
    $nama_ibu = $_POST['nama-ibu'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $alamat = $_POST['alamat'];

    // Handle file uploads
    $photo = $_FILES['photo']['name'];
    $ktp = $_FILES['ktp']['name'];
    $kk_photo = $_FILES['kk-photo']['name'];
    $ijazah = $_FILES['ijazah']['name'];

    $target_dir = "uploads/";
    move_uploaded_file($_FILES['photo']['tmp_name'], $target_dir . $photo);
    move_uploaded_file($_FILES['ktp']['tmp_name'], $target_dir . $ktp);
    move_uploaded_file($_FILES['kk-photo']['tmp_name'], $target_dir . $kk_photo);
    move_uploaded_file($_FILES['ijazah']['tmp_name'], $target_dir . $ijazah);

    $sql = "INSERT INTO daftar (fullname, birthplace, birthdate, nis, nisn, nik, kk, nama_ayah, nama_ibu, phone, email, photo, ktp, kk_photo, ijazah, alamat)
            VALUES ('$fullname', '$birthplace', '$birthdate', '$nis', '$nisn', '$nik', '$kk', '$nama_ayah', '$nama_ibu', '$phone', '$email', '$photo', '$ktp', '$kk_photo', '$ijazah', '$alamat')";

    if ($conn->query($sql) === TRUE) {
        echo "Data berhasil disimpan!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>