/* =================================
   PORTFOLIO SCRIPT - DIMAS PRIOSETO
================================= */


/* ================================
   1. DARK MODE TOGGLE
================================ */

const darkToggleBtn = document.querySelector("#dark-toggle");
const body = document.body;

// cek apakah sebelumnya dark mode aktif
if (localStorage.getItem("darkMode") === "aktif") {
  body.classList.add("dark-mode");
  if (darkToggleBtn) {
    darkToggleBtn.textContent = "☀️ Light Mode";
  }
}

if (darkToggleBtn) {
  darkToggleBtn.addEventListener("click", function () {

    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
      darkToggleBtn.textContent = "☀️ Light Mode";
      localStorage.setItem("darkMode", "aktif");
    } else {
      darkToggleBtn.textContent = "🌙 Dark Mode";
      localStorage.removeItem("darkMode");
    }

  });
}



/* ================================
   2. COUNTER MINUM AIR
================================ */

let count = 0;

const angkaDisplay = document.querySelector("#angka-counter");
const pesanDisplay = document.querySelector("#counter-pesan");
const btnTambah = document.querySelector("#btn-tambah");
const btnKurang = document.querySelector("#btn-kurang");

function updatePesan(n) {

  if (!pesanDisplay) return;

  if (n === 0) {
    pesanDisplay.textContent = "Hallo Ini Web Dimas!";
  }

  else if (n < 8) {
    pesanDisplay.textContent = "Bisa kan?...";
  }

  else if (n < 20) {
    pesanDisplay.textContent = "Gabut Kan? Terus Klik ";
  }

  else {
    pesanDisplay.textContent = "Udah Cukup ";
  }

}

if (btnTambah) {
  btnTambah.addEventListener("click", function () {

    count++;
    if (angkaDisplay) angkaDisplay.innerText = count;

    updatePesan(count);

  });
}

if (btnKurang) {
  btnKurang.addEventListener("click", function () {

    if (count > 0) {
      count--;
      if (angkaDisplay) angkaDisplay.innerText = count;
      updatePesan(count);
    }

  });
}



/* ================================
   3. VALIDASI FORM KONTAK
================================ */

const btnKirim = document.querySelector("#btn-kirim");
const inputNama = document.querySelector("#input-nama");
const inputEmail = document.querySelector("#input-email");
const inputPesan = document.querySelector("#input-pesan");
const formFeedback = document.querySelector("#form-feedback");


function tampilkanPesan(teks, tipe) {

  if (!formFeedback) return;

  formFeedback.textContent = teks;
  formFeedback.className = "feedback " + tipe;

}


function isEmailValid(email) {

  return email.includes("@") && email.includes(".");

}


if (btnKirim) {
  btnKirim.addEventListener("click", function () {

    const nama = inputNama.value.trim();
    const email = inputEmail.value.trim();
    const pesan = inputPesan.value.trim();

    if (nama === "" || email === "" || pesan === "") {
      tampilkanPesan("⚠️ Semua field harus diisi!", "error");
      return;
    }

    if (!isEmailValid(email)) {
      tampilkanPesan(
        "⚠️ Format email tidak valid! Contoh: nama@email.com",
        "error"
      );
      return;
    }

    tampilkanPesan(
      "✅ Pesan berhasil dikirim! Terima kasih, " + nama + "!",
      "success"
    );

    inputNama.value = "";
    inputEmail.value = "";
    inputPesan.value = "";

    // sembunyikan pesan setelah 4 detik
    setTimeout(function () {
      formFeedback.className = "feedback hidden";
    }, 4000);

  });
}