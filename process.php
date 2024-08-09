<?php
// Konfigurasi koneksi database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio_db"; // Nama database

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Validasi input form
function validateInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Mendapatkan dan memvalidasi input dari form
$fullname = validateInput($_POST['fullname']);
$birthplace = validateInput($_POST['birthplace']);
$birthdate = validateInput($_POST['birthdate']);
$nis = validateInput($_POST['nis']);
$nisn = validateInput($_POST['nisn']);
$nik = validateInput($_POST['nik']);
$kk = validateInput($_POST['kk']);
$nama_ayah = validateInput($_POST['nama-ayah']);
$nama_ibu = validateInput($_POST['nama-ibu']);
$phone = validateInput($_POST['phone']);
$email = validateInput($_POST['email']);
$alamat = validateInput($_POST['alamat']);

// Upload foto
$photo = $_FILES['photo']['name'];
$photo_tmp = $_FILES['photo']['tmp_name'];
$photo_ext = strtolower(pathinfo($photo, PATHINFO_EXTENSION));

$ktp = $_FILES['ktp']['name'];
$ktp_tmp = $_FILES['ktp']['tmp_name'];
$ktp_ext = strtolower(pathinfo($ktp, PATHINFO_EXTENSION));

$kk_photo = $_FILES['kk-photo']['name'];
$kk_photo_tmp = $_FILES['kk-photo']['tmp_name'];
$kk_photo_ext = strtolower(pathinfo($kk_photo, PATHINFO_EXTENSION));

$ijazah = $_FILES['ijazah']['name'];
$ijazah_tmp = $_FILES['ijazah']['tmp_name'];
$ijazah_ext = strtolower(pathinfo($ijazah, PATHINFO_EXTENSION));

// Validasi tipe file
$allowed_ext = ['jpeg', 'jpg'];
if (!in_array($photo_ext, $allowed_ext) || !in_array($ktp_ext, $allowed_ext) || !in_array($kk_photo_ext, $allowed_ext) || !in_array($ijazah_ext, $allowed_ext)) {
    die("File yang diunggah harus berformat .jpeg atau .jpg");
}

// Pindahkan file ke folder tujuan
$upload_dir = "uploads/";
move_uploaded_file($photo_tmp, $upload_dir . $photo);
move_uploaded_file($ktp_tmp, $upload_dir . $ktp);
move_uploaded_file($kk_photo_tmp, $upload_dir . $kk_photo);
move_uploaded_file($ijazah_tmp, $upload_dir . $ijazah);

// Masukkan data ke dalam database
$sql = "INSERT INTO pendaftar (fullname, birthplace, birthdate, nis, nisn, nik, kk, nama_ayah, nama_ibu, phone, email, alamat, photo, ktp, kk_photo, ijazah)
        VALUES ('$fullname', '$birthplace', '$birthdate', '$nis', '$nisn', '$nik', '$kk', '$nama_ayah', '$nama_ibu', '$phone', '$email', '$alamat', '$photo', '$ktp', '$kk_photo', '$ijazah')";

if ($conn->query($sql) === TRUE) {
    echo "Pendaftaran berhasil!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Menutup koneksi
$conn->close();
?>
