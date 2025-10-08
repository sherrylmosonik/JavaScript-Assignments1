const students = [
  {
    name: "Alice Kim",
    course: "Computer Science",
    year: "2nd Year",
    skills: ["JavaScript", "HTML", "CSS"],
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Bright Atieno",
    course: "Information Technology",
    year: "3rd Year",
    skills: ["Python", "React", "JavaScript"],
    photo: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Cynthia Wambua",
    course: "Software Engineering",
    year: "1st Year",
    skills: ["C++", "Git", "UI/UX Design"],
    photo: "https://randomuser.me/api/portraits/women/46.jpg"
  },
  {
    name: "Davis Mwangangi",
    course: "Data Science",
    year: "4th Year",
    skills: ["Python", "Machine Learning", "JavaScript"],
    photo: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    name: "Evalyne Njeri",
    course: "Cyber Security",
    year: "3rd Year",
    skills: ["Networking", "Linux", "Ethical Hacking"],
    photo: "https://randomuser.me/api/portraits/women/48.jpg"
  },
  {
    name: "Frank Mutua",
    course: "Information Technology",
    year: "2nd Year",
    skills: ["Java", "Database Management", "Project Management"],
    photo: "https://randomuser.me/api/portraits/men/49.jpg"
  }
];

     const studentsContainer = document.getElementById("studentsContainer");
    const courseFilter = document.getElementById("courseFilter");
    const jsFilterBtn = document.getElementById("jsFilterBtn");

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
        card.innerHTML = `
          <img src="${student.photo}" alt="${student.name}" class="student-photo" />
          <h3>${student.name}</h3>
          <p><strong>Course:</strong> ${student.course}</p>
          <p><strong>Year:</strong> ${student.year}</p>
          <p><strong>Skills:</strong> ${student.skills.join(", ")}</p>
        `;
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

    // Initial render
    renderStudents(students);