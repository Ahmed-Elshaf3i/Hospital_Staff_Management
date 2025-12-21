document.addEventListener("DOMContentLoaded", () => {
  // Ensure data is loaded
  if (typeof doctors === "undefined") return;

  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const navbar = document.querySelector("header .navbar");
  if (menuBtn && navbar) {
    menuBtn.onclick = () => {
      navbar.classList.toggle("nav-toggle");
    };
  }

  // --- Doctors Page Logic ---
  const doctorsContainer = document.getElementById("doctors-container");

  if (doctorsContainer) {
    let doctorsHtml = "";
    doctors.forEach((doctor) => {
      const socialHtml = generateSocialLinks(doctor.social);

      doctorsHtml += `
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 text-center">
            <a href="staff-details.html?id=${doctor.id}">
              <img
                src="${doctor.img}"
                class="card-img-top"
                alt="${doctor.name}"
                style="height: 30rem; object-fit: cover"
              />
            </a>
            <div class="card-body">
              <h2 class="card-title text-capitalize fs-2">${doctor.name}</h2>
              <p class="card-text text-muted fs-4">${doctor.role}</p>
              <div class="d-flex justify-content-center gap-3 mt-3">
                ${socialHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    });
    doctorsContainer.innerHTML = doctorsHtml;
  }

  // --- Staff Details Page Logic ---
  const staffNameElement = document.getElementById("staff-name");

  if (staffNameElement) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id) {
      const doctor = doctors.find((d) => d.id == id);

      if (doctor) {
        document.getElementById("staff-name").textContent = doctor.name;
        document.getElementById("staff-role").textContent = doctor.role;
        document.getElementById("staff-img").src = doctor.img;

        if (doctor.description) {
          document.getElementById("staff-desc").textContent =
            doctor.description;
        }

        const socialContainer = document.getElementById("social-links");
        if (socialContainer) {
          socialContainer.innerHTML = generateSocialLinks(
            doctor.social,
            "fs-2"
          );
        }
      } else {
        document.querySelector(".container").innerHTML =
          "<h1 class='heading text-center text-danger'>Doctor Not Found</h1>";
      }
    }
  }
});

// --- Helper Functions ---
function generateSocialLinks(social, sizeClass = "fs-3") {
  if (!social) return "";

  const icons = {
    facebook: "facebook-f",
    twitter: "twitter",
    instagram: "instagram",
    linkedin: "linkedin",
    github: "github",
  };

  let html = "";
  for (const [platform, url] of Object.entries(social)) {
    if (url && icons[platform]) {
      html += `<a href="${url}" target="_blank" class="fab fa-${icons[platform]} ${sizeClass} text-primary"></a>`;
    }
  }
  return html;
}
