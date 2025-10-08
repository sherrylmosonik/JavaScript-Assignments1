const students = [
  {
    name: "Alice Kim",
    course: "Computer Science",
    year: "2nd Year",
    skills: ["JavaScript", "HTML", "CSS"],
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    grade: 95
  },
  {
    name: "Bright Atieno",
    course: "Information Technology",
    year: "3rd Year",
    skills: ["Python", "React", "JavaScript"],
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    grade: 72

  },
  {
    name: "Cynthia Wambua",
    course: "Software Engineering",
    year: "1st Year",
    skills: ["C++", "Git", "UI/UX Design"],
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    grade: 88
  },
  {
    name: "Davis Mwangangi",
    course: "Data Science",
    year: "4th Year",
    skills: ["Python", "Machine Learning", "JavaScript"],
    photo: "https://randomuser.me/api/portraits/men/47.jpg",
    grade: 75
  },
  {
    name: "Evalyne Njeri",
    course: "Cyber Security",
    year: "3rd Year",
    skills: ["Networking", "Linux", "Ethical Hacking"],
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    grade: 90
  },
  {
    name: "Frank Mutua",
    course: "Information Technology",
    year: "2nd Year",
    skills: ["Java", "Database Management", "Project Management"],
    photo: "https://randomuser.me/api/portraits/men/49.jpg",
    grade: 85
  }
];

    const studentsContainer = document.getElementById("studentsContainer");
    const courseFilter = document.getElementById("courseFilter");
    const jsFilterBtn = document.getElementById("jsFilterBtn");
    const addStudentForm = document.getElementById("addStudentForm");
    const sortAZ = document.getElementById("sortAZ");
    const sortZA = document.getElementById("sortZA");

    // Function to render student cards
    function renderStudents(filteredStudents) {
      studentsContainer.innerHTML = "";
      if (filteredStudents.length === 0) {
        studentsContainer.innerHTML = "<p>No students found.</p>";
        return;
      }
      filteredStudents.forEach(student => {
        const card = document.createElement("div");
        card.classList.add("student-card");
        
        // Check grade condition
    const medal = student.grade > 80 ? "🏅" : "";

        card.innerHTML = `
          <img src="${student.photo}" alt="${student.name}" class="student-photo" />
          <h3>${student.name} ${medal}</h3>
          <p><strong>Course:</strong> ${student.course}</p>
          <p><strong>Year:</strong> ${student.year}</p>
          <p><strong>Skills:</strong> ${student.skills.join(", ")}</p>
           <p><strong>Grade:</strong> ${student.grade}%</p>
        `;
         // Add click event to open modal
        card.addEventListener("click", () => showStudentModal(student));
        studentsContainer.appendChild(card);
      });
    }

    // Filter students when dropdown changes
    courseFilter.addEventListener("change", () => {
      const selectedCourse = courseFilter.value;
      if (selectedCourse === "all") {
        renderStudents(students);
      } else {
        const filtered = students.filter(
          student => student.course === selectedCourse
        );
        renderStudents(filtered);
      }
    });

    // Filter students by JavaScript skill
    jsFilterBtn.addEventListener("click", () => {
      const filtered = students.filter(student =>
        student.skills.includes("JavaScript")
      );
      renderStudents(filtered);
    });

    //  Add New Student
      addStudentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const course = document.getElementById("course").value.trim();
      const year = document.getElementById("year").value.trim();
      const skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());
      const photo = document.getElementById("photo").value.trim();

      const newStudent = { name, course, year, skills, photo };
      students.push(newStudent);
      renderStudents(students);
      addStudentForm.reset();
    });

     // Sort Students Alphabetically
    sortAZ.addEventListener("click", () => {
      students.sort((a, b) => a.name.localeCompare(b.name)); // A–Z
      renderStudents(students);
    });

    sortZA.addEventListener("click", () => {
      students.sort((a, b) => b.name.localeCompare(a.name)); // Z–A
      renderStudents(students);
    });

    // Modal Functionality/ Show modal details
function showStudentModal(student) {
  const modal = document.getElementById("studentModal");
  const details = document.getElementById("modalDetails");

  details.innerHTML = `
    <img src="${student.photo}" width="120" alt="${student.name}">
    <h2>${student.name}</h2>
    <p><strong>Course:</strong> ${student.course}</p>
    <p><strong>Year:</strong> ${student.year}</p>
    <p><strong>Skills:</strong> ${student.skills.join(", ")}</p>
    <p><strong>Grade:</strong> ${student.grade}%</p>
  `;

  modal.style.display = "block";
}

// Close modal
document.getElementById("closeModal").onclick = function() {
  document.getElementById("studentModal").style.display = "none";
};

// Close when clicking outside modal
window.onclick = function(event) {
  const modal = document.getElementById("studentModal");
  if (event.target === modal) modal.style.display = "none";
};


    // Initial render
    renderStudents(students);