document.addEventListener("DOMContentLoaded", function () {
    // Admin Login
    const loginForm = document.querySelector("form[action='admindash.html']");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "admindash.html";
        });
    }

    // Fetching Students
    async function fetchStudents() {
        try {
            let response = await fetch("http://localhost:5000/api/students");
            let students = await response.json();
            console.log(students); // Display students in UI
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    }

    // Fetch Exam Halls
    async function fetchExamHalls() {
        try {
            let response = await fetch("http://localhost:5000/api/exam_halls");
            let halls = await response.json();
            console.log(halls); // Display halls in UI
        } catch (error) {
            console.error("Error fetching halls:", error);
        }
    }

    // Fetch Seating Arrangement
    async function fetchSeatingArrangement() {
        try {
            let response = await fetch("http://localhost:5000/api/seating_chart");
            let seatingChart = await response.json();
            console.log(seatingChart); // Display seating chart in UI
        } catch (error) {
            console.error("Error fetching seating chart:", error);
        }
    }

    // Assign functions to buttons
    const studentBtn = document.getElementById("fetchStudents");
    if (studentBtn) studentBtn.addEventListener("click", fetchStudents);

    const hallBtn = document.getElementById("fetchHalls");
    if (hallBtn) hallBtn.addEventListener("click", fetchExamHalls);

    const seatingBtn = document.getElementById("fetchSeating");
    if (seatingBtn) seatingBtn.addEventListener("click", fetchSeatingArrangement);
});
