let students = [
  { id: 1, name: "Nguyễn Văn A", dob: "2000-05-10", gender: "Nam" },
  { id: 2, name: "Trần Thị B", dob: "2001-08-22", gender: "Nữ" }
];

function renderStudents() {
  const tbody = document.getElementById("studentTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";
  students.forEach((s) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.id}</td>
      <td><b>${s.name}</b></td>
      <td>${s.dob}</td>
      <td>${s.gender}</td>
      <td><button class="btn-delete" data-id="${s.id}">Xóa</button></td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"), 10);
      deleteStudent(id);
    });
  });
}

function addStudent(name, dob, gender) {
  const newStudent = {
    id: students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1,
    name: name,
    dob: dob,
    gender: gender
  };
  students.push(newStudent);
  renderStudents();
}

function deleteStudent(id) {
  students = students.filter((s) => s.id !== id);
  renderStudents();
}

document.addEventListener("DOMContentLoaded", () => {
  renderStudents();

  const form = document.getElementById("studentForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("nameInput").value.trim();
      const dob = document.getElementById("dobInput").value;
      const gender = document.getElementById("genderInput").value;

      if (name && dob && gender) {
        addStudent(name, dob, gender);
        form.reset();
      }
    });
  }
});