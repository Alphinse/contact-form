document.addEventListener("DOMContentLoaded", function () {
  // Menu toggle functionality for mobile view
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const navLinks = document.querySelectorAll(".nav-link");
  const mainContent = document.querySelector("main");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("show-sidebar");
  });

  mainContent.addEventListener("click", function () {
    if (sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.remove("show-sidebar");
      menuToggle.classList.remove("active");
    }
  });

  document.addEventListener("click", function (e) {
    if (
      e.target !== sidebar &&
      e.target !== menuToggle &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      sidebar.classList.remove("show-sidebar");
      menuToggle.classList.remove("active");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      document.querySelectorAll(".content-section").forEach((section) => {
        section.style.display = "none";
      });
      targetSection.style.display = "block";
      sidebar.classList.remove("show-sidebar");
      menuToggle.classList.remove("active");
    });
  });

  // Display the home section by default
  document.querySelector(".content-section").style.display = "block";

  // Form validation
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const phoneInput = document.getElementById("phone");
    const phoneValue = phoneInput.value;
    if (!/^\d{10,12}$/.test(phoneValue)) {
      alert("Please enter a valid phone number (10-12 digits).");
      return;
    }
    const emailInput = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|.+\.(id|org))$/;
    if (!emailPattern.test(emailInput)) {
      alert("Email harus berakhiran @gmail.com, .id, atau .org");
      return;
    }

    const nikInput = document.getElementById("nik").value;
    const kkInput = document.getElementById("kk").value;
    const numberPattern = /^[0-9]+$/;
    if (
      !numberPattern.test(phoneValue) ||
      !numberPattern.test(nikInput) ||
      !numberPattern.test(kkInput)
    ) {
      alert("Nomor telepon, NIK, dan KK harus berupa angka");
      return;
    }

    const ktpFile = document.getElementById("ktp").files[0];
    const kkFile = document.getElementById("kk-photo").files[0];
    const ijazahFile = document.getElementById("ijazah").files[0];

    if (!ktpFile || !ktpFile.type.includes("jpeg")) {
      alert("Foto KTP harus berformat jpeg dan diambil dari kamera");
      return;
    }

    if (!kkFile || !kkFile.type.includes("jpeg")) {
      alert("Foto KK harus berformat jpeg dan diambil dari kamera");
      return;
    }

    if (!ijazahFile || !ijazahFile.type.includes("jpeg")) {
      alert("Foto Ijazah harus berformat jpeg dan diambil dari kamera");
      return;
    }

    // Show success notification
    showNotification("Form submitted successfully!", "success");
    form.reset();
  });

  function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
          <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
          ${message}
        `;
    document.body.appendChild(notification);
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
      document.body.removeChild(notification);
    }, 3000);
  }

  // Live validation for email and numeric inputs
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const nikInput = document.getElementById("nik");
  const kkInput = document.getElementById("kk");

  emailInput.addEventListener("input", function () {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|\.id|\.org)$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.setCustomValidity(
        "Email harus berakhiran @gmail.com, .id, atau .org"
      );
    } else {
      emailInput.setCustomValidity("");
    }
  });

  function validateNumericInput(input) {
    input.addEventListener("input", function () {
      const value = input.value;
      if (!/^\d*$/.test(value)) {
        input.value = value.replace(/\D/g, "");
      }
    });
  }

  validateNumericInput(phoneInput);
  validateNumericInput(nikInput);
  validateNumericInput(kkInput);
});
