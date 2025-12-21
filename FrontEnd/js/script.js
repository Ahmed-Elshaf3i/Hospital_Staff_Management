document.addEventListener('DOMContentLoaded', () => {
  // 1. Logic Doctors (بيشتغل لو إنت في صفحة الدكاترة)
  const doctorsContainer = document.getElementById('doctors-container')
  if (doctorsContainer && typeof doctors !== 'undefined') {
    let doctorsHtml = ''
    doctors.forEach((doctor) => {
      const socialHtml = generateSocialLinks(doctor.social)
      doctorsHtml += `
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 text-center">
            <a href="staff-details.html?id=${doctor.id}">
              <img src="${doctor.img}" class="card-img-top" style="height: 30rem; object-fit: cover" />
            </a>
            <div class="card-body">
              <h2 class="card-title text-capitalize fs-2">${doctor.name}</h2>
              <p class="card-text text-muted fs-4">${doctor.role}</p>
              <div class="d-flex justify-content-center gap-3 mt-3">${socialHtml}</div>
            </div>
          </div>
        </div>`
    })
    doctorsContainer.innerHTML = doctorsHtml
  }

  // 2. Logic Patients (العرض والإضافة باستخدام LocalStorage)
  const patientsContainer = document.getElementById('patients-container')
  const addPatientForm = document.getElementById('add-patient-form')

  function displayPatients() {
    if (!patientsContainer) return

    // بيجيب من التخزين أو بياخد اللي في patients.js كبداية
    let currentPatients =
      JSON.parse(localStorage.getItem('myPatients')) ||
      (typeof patients !== 'undefined' ? patients : [])

    let html = ''
    currentPatients.forEach((p) => {
      html += `
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 text-center">
            <div class="card-body">
              <i class="fas fa-user-injured fs-1 mb-3 text-primary"></i>
              <h2 class="card-title text-capitalize fs-2">${p.name}</h2>
              <p class="card-text fs-4"><strong>Case:</strong> ${p.case}</p>
              <p class="card-text fs-5"><strong>Room:</strong> ${p.room}</p>
              <span class="badge ${p.status === 'Critical' ? 'bg-danger' : 'bg-success'} fs-5">${
        p.status
      }</span>
            </div>
          </div>
        </div>`
    })
    patientsContainer.innerHTML = html
  }

  if (addPatientForm) {
    addPatientForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const newPatient = {
        id: Date.now(),
        name: document.getElementById('p-name').value,
        case: document.getElementById('p-case').value,
        room: document.getElementById('p-room').value,
        status: document.getElementById('p-status').value,
      }

      let currentPatients =
        JSON.parse(localStorage.getItem('myPatients')) ||
        (typeof patients !== 'undefined' ? patients : [])
      currentPatients.push(newPatient)
      localStorage.setItem('myPatients', JSON.stringify(currentPatients))

      // قفل المودال وتصفير الفورم
      const modalElement = document.getElementById('addPatientModal')
      const modal = bootstrap.Modal.getInstance(modalElement)
      modal.hide()
      addPatientForm.reset()
      displayPatients()
    })
  }
  displayPatients()

  // 3. Logic Staff Details (صفحة التفاصيل)
  const staffNameElement = document.getElementById('staff-name')
  if (staffNameElement && typeof doctors !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const doctor = doctors.find((d) => d.id == id)
    if (doctor) {
      document.getElementById('staff-name').textContent = doctor.name
      document.getElementById('staff-role').textContent = doctor.role
      document.getElementById('staff-img').src = doctor.img
      if (doctor.description) {
        document.getElementById('staff-desc').textContent = doctor.description
      }
    }
  }
})

// Helper Functions
function generateSocialLinks(social, sizeClass = 'fs-3') {
  if (!social) return ''
  const icons = {
    facebook: 'facebook-f',
    twitter: 'twitter',
    instagram: 'instagram',
    linkedin: 'linkedin',
  }
  let html = ''
  for (const [p, url] of Object.entries(social)) {
    if (url && icons[p])
      html += `<a href="${url}" target="_blank" class="fab fa-${icons[p]} ${sizeClass} text-primary mx-1"></a>`
  }
  return html
}
