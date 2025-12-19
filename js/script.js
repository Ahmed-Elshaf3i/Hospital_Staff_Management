// Doctors Data
const doctors = [
  {
    id: 1,
    name: "John Doe",
    role: "Professional",
    img: "https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/doctor-1.jpg",
    description:
      "Dr. John Doe is a highly skilled professional with over 10 years of experience in cardiology. He is dedicated to providing the best care for his patients.",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Pediatrician",
    img: "https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/doctor-2.jpg",
    description:
      "Dr. Jane Smith specializes in pediatric care, ensuring the health and well-being of children from infancy through adolescence.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "Peter Jones",
    role: "Neurologist",
    img: "https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/doctor-3.jpg",
    description:
      "Dr. Peter Jones is an expert neurologist focusing on disorders of the nervous system. He is known for his compassionate approach.",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initDoctorsPage();
  initStaffDetailsPage();
});

// --- Doctors Page Logic ---
function initDoctorsPage() {
  const doctorsContainer = document.getElementById("doctors-container");
  if (!doctorsContainer) return;

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
function initStaffDetailsPage() {
  const staffNameElement = document.getElementById("staff-name");
  if (!staffNameElement) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    const doctor = doctors.find((d) => d.id == id);

    if (doctor) {
      document.getElementById("staff-name").textContent = doctor.name;
      document.getElementById("staff-role").textContent = doctor.role;
      document.getElementById("staff-img").src = doctor.img;

      if (doctor.description) {
        document.getElementById("staff-desc").textContent = doctor.description;
      }

      const socialContainer = document.getElementById("social-links");
      if (socialContainer) {
        socialContainer.innerHTML = generateSocialLinks(doctor.social, "fs-2");
      }
    } else {
      document.querySelector(".container").innerHTML =
        "<h1 class='heading text-center text-danger'>Doctor Not Found</h1>";
    }
  }
}

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
