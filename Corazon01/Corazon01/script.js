document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  // ==== LOGIN ====
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();
      const error = document.getElementById("error");

      if (user === "Mashita" && pass === "Eres tú") {
        // Lanza corazones como efecto visual
        lanzarCorazones();

        // Redirige a la presentación después de 2.5 segundos
        setTimeout(() => {
          window.location.href = "01presentacion.html";
        }, 2500);
      } else {
        error.textContent = "❌ Usuario o contraseña incorrectos";
      }
    });
  }

  // ==== PRESENTACIÓN ====
  if (document.body.classList.contains("presentacion")) {
    setInterval(() => {
      const corazon = document.createElement("div");
      corazon.classList.add("corazon");
      corazon.textContent = "❤️";
      corazon.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(corazon);

      setTimeout(() => corazon.remove(), 5000);
    }, 800);
  }

  // ==== VIDEO EN SECCIÓN MÚSICA ====
  const video = document.getElementById("musicaVideo");
  if (video) {
    const musicaItem = video.closest(".item");

    musicaItem.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
});

// ==== FUNCIÓN CORAZONES LOGIN ====
function lanzarCorazones() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const corazon = document.createElement("div");
      corazon.classList.add("corazon");
      corazon.textContent = "❤️";
      corazon.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(corazon);

      setTimeout(() => corazon.remove(), 5000);
    }, i * 100);
  }
}
