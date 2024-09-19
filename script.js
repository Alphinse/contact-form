document.getElementById("menu-toggle").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("-translate-x-full");
});
// Close sidebar when clicking outside of it
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("menu-toggle");
  if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
    sidebar.classList.add("-translate-x-full");
  }
});
// Sidebar navigation
document.querySelectorAll("#sidebar nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll("main section").forEach((section) => {
      section.classList.add("hidden");
    });
    document
      .getElementById(this.getAttribute("data-section"))
      .classList.remove("hidden");
    if (window.innerWidth < 1024) {
      sidebar.classList.add("-translate-x-full");
    }
  });
});
// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll("#carousel .carousel-item");
const totalSlides = slides.length;
document.getElementById("next").addEventListener("click", () => {
  slides[currentSlide].classList.add("hidden");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.remove("hidden");
});
document.getElementById("prev").addEventListener("click", () => {
  slides[currentSlide].classList.add("hidden");
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slides[currentSlide].classList.remove("hidden");
});

// Event Listener untuk course card dan form pendaftaran
document.addEventListener("DOMContentLoaded", function () {
  const courseCards = document.querySelectorAll(".course-card");
  const registrationForm = document.getElementById("registration-form");
  const submitButton = document.getElementById("submit-button");
  const backButton = document.getElementById("back-button");
  const continueCourseButtons = document.querySelectorAll(".continue-course");
  const formInputs = document.querySelectorAll(
    "#course-form input, #course-form select, #course-form textarea"
  );

  document.querySelectorAll(".continue-course").forEach((button) => {
    button.addEventListener("click", function () {
      courseCards.forEach((card) => card.classList.add("hidden"));
      registrationForm.classList.remove("hidden");
    });
  });

  backButton.addEventListener("click", function () {
    registrationForm.classList.add("hidden");
    courseCards.forEach((card) => card.classList.remove("hidden"));
  });

  formInputs.forEach((input) => {
    input.addEventListener("input", function () {
      let isFormValid = true;
      formInputs.forEach((input) => {
        if (input.value.trim() === "") {
          isFormValid = false;
        }
      });
      submitButton.disabled = !isFormValid;
    });
  });

  document
    .getElementById("course-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const paymentMethod = document.getElementById("payment-method").value;

      const paymentUrls = {
        GoPay: "https://gopay.co.id",
        LinkAja: "https://linkaja.id",
        PayPal: "https://paypal.com"
      };

      window.open(paymentUrls[paymentMethod], "_blank");

      alert("Pembayaran berhasil kami terima!");
      this.reset();
      submitButton.disabled = true;
      registrationForm.classList.add("hidden");
      courseCards.forEach((card) => card.classList.remove("hidden"));
    });
});

// Event Listener untuk navigasi course
const courseLinks = {
  "computer-course-link": "computer-course-card",
  "web-course-link": "web-course-card",
  "android-course-link": "android-course-card"
};

Object.keys(courseLinks).forEach((linkId) => {
  document.getElementById(linkId).addEventListener("click", function () {
    document
      .querySelectorAll(".course-card")
      .forEach((card) => card.classList.add("hidden"));
    document.getElementById(courseLinks[linkId]).classList.remove("hidden");
  });
});
//
// Mendapatkan elemen yang dibutuhkan untuk button/tombol
const computerCourseButton = document.getElementById(
  "continue-course-computer-btn"
);
const webCourseButton = document.getElementById("continue-course-web-btn");
const androidCourseButton = document.getElementById(
  "continue-course-android-btn"
);

// ini elemen yang di ambil dari card
const computerCourseCard = document.getElementById("computer-course-card");
const webCourseCard = document.getElementById("web-course-card");
const androidCourseCard = document.getElementById("android-course-card");

const registrationForm = document.getElementById("registration-form");
const backButton = document.getElementById("back-button");

// Fungsi untuk menyembunyikan semua kartu kursus
function hideAllCourseCards() {
  computerCourseCard.classList.add("hidden");
  webCourseCard.classList.add("hidden");
  androidCourseCard.classList.add("hidden");
}

// Event listener untuk tombol "Lanjut Kursus" (kursus komputer)
computerCourseButton.addEventListener("click", function () {
  hideAllCourseCards();
  registrationForm.classList.remove("hidden");
});

// Event listener untuk tombol "Lanjut Kursus" (kursus web)
webCourseButton.addEventListener("click", function () {
  hideAllCourseCards();
  registrationForm.classList.remove("hidden");
});

// Event listener untuk tombol "Lanjut Kursus" (kursus android)
androidCourseButton.addEventListener("click", function () {
  hideAllCourseCards();
  registrationForm.classList.remove("hidden");
});

// Event listener untuk tombol "Kembali"
backButton.addEventListener("click", function () {
  registrationForm.classList.add("hidden");
  computerCourseCard.classList.remove("hidden");
  webCourseCard.classList.remove("hidden");
  androidCourseCard.classList.remove("hidden");
});
//
// Update course fee based on selection
function updateBiaya() {
  const kursus = document.getElementById("kursus").value;
  const biaya = document.getElementById("biaya");
  const biayaMap = {
    komputer: "Rp 1.800.000,00 (satu juta delapan ratus ribu rupiah)",
    web: "Rp 3.400.000,00 (tiga juta empat ratus ribu rupiah)",
    android:
      "Rp 4.478.000,00 (empat juta empat ratus tujuh puluh delapan ribu rupiah)"
  };
  biaya.value = biayaMap[kursus] || "";
}
//
const projects = [
  {
    id: 1,
    name: "Web Development",
    email: "project1@example.com",
    job: "Developer",
    skills: "HTML, CSS, JavaScript",
    image:
      "https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ4NTM4Njh8&ixlib=rb-4.0.3&q=85"
  },
  {
    id: 2,
    name: "Web Programming",
    email: "projects2@example.com",
    job: "Programmer",
    skills: "Java, Python, PHP",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ4NTM4Njh8&ixlib=rb-4.0.3&q=85"
  },
  {
    id: 3,
    name: "Android Studio",
    email: "project3@example.com",
    job: "Mobile Developer",
    skills: "Android, Java, Kotlin",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ4NTQwNTB8&ixlib=rb-4.0.3&q=85"
  }
];

// Ketika tombol "Detail" diklik
document.querySelectorAll(".detail-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const id = this.getAttribute("data-id");
    const project = projects.find((p) => p.id == id);

    // Sembunyikan semua card
    document.getElementById("project-cards").classList.add("hidden");

    // Tampilkan form detail dan isi datanya
    document.getElementById("form-container").classList.remove("hidden");
    document.getElementById("detail-image").src = project.image;
    document.getElementById(
      "detail-name"
    ).textContent = `Nama: ${project.name}`;
    document.getElementById(
      "detail-email"
    ).textContent = `Email: ${project.email}`;
    document.getElementById(
      "detail-job"
    ).textContent = `Pekerjaan: ${project.job}`;
    document.getElementById(
      "detail-skills"
    ).textContent = `Keahlian: ${project.skills}`;
  });
});

// Ketika tombol "Kembali" diklik
document.getElementById("back-btn").addEventListener("click", function () {
  // Tampilkan kembali project cards
  document.getElementById("project-cards").classList.remove("hidden");

  // Sembunyikan form detail
  document.getElementById("form-container").classList.add("hidden");
});

//
// Fungsi validasi telepon
function validatePhone() {
  const phoneInput = document.getElementById("phone").value;
  const phonePattern = /^08\d{10}$/; // Harus dimulai dengan "08" dan diikuti 10 digit angka
  return phonePattern.test(phoneInput);
}

// Fungsi validasi email
function validateEmail() {
  const emailInput = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co\.id|org|id)$/;
  return emailPattern.test(emailInput);
}

// Fungsi untuk menampilkan dan mengarahkan pembayaran
function handleSubmit(event) {
  event.preventDefault(); // Mencegah form submit secara default
  const phoneValid = validatePhone();
  const emailValid = validateEmail();

  if (!phoneValid) {
    alert(
      "Nomor telepon tidak valid! Nomor harus berisi 12 digit dan dimulai dengan '08'."
    );
    return;
  }

  if (!emailValid) {
    alert(
      "Email tidak valid! Harus diakhiri dengan .com, .co.id, .org, atau .id."
    );
    return;
  }

  // Jika valid, tampilkan data yang diinput
  const course = document.getElementById("kursus").value;
  const biaya = document.getElementById("biaya").value;
  const fullName = document.getElementById("full-name").value;
  const paymentMethod = document.getElementById("payment-method").value;

  alert(
    `Kursus: ${course}\nBiaya: ${biaya}\nNama Lengkap: ${fullName}\nMetode Pembayaran: ${paymentMethod}`
  );

  // Pengarahan ke halaman pembayaran
  let paymentUrl;
  switch (paymentMethod) {
    case "GoPay":
      paymentUrl = "https://midtrans.com/gojek"; // Contoh URL untuk GoPay
      break;
    case "LinkAja":
      paymentUrl = "https://midtrans.com/linkaja"; // Contoh URL untuk LinkAja
      break;
    case "PayPal":
      paymentUrl = "https://midtrans.com/paypal"; // Contoh URL untuk PayPal
      break;
    default:
      alert("Pilih metode pembayaran yang valid!");
      return;
  }

  window.open(paymentUrl, "_blank"); // Buka link pembayaran di tab baru
}

// Aktifkan tombol ketika kursus dipilih
document.getElementById("course-form").addEventListener("change", function () {
  const course = document.getElementById("kursus").value;
  const paymentMethod = document.getElementById("payment-method").value;
  const submitButton = document.getElementById("submit-button");

  if (course && paymentMethod) {
    submitButton.disabled = false; // Aktifkan tombol "Bayar Sekarang"
  } else {
    submitButton.disabled = true; // Nonaktifkan tombol
  }
});

// Tangani tombol Bayar Sekarang
document.getElementById("course-form").addEventListener("submit", handleSubmit);
