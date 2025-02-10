document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect for Name
    const text = "Swettha, an AI & Data Science Enthusiast!!";
    let index = 0;
    const speed = 100;
    const typingElement = document.querySelector(".typing-text");

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }
    typeText();

    // Smooth Scrolling and Centering Sections
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "center" // Centers the section on screen
            });
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // === FIXED PROJECT CAROUSEL ===
    const projects = document.querySelectorAll(".project-card");
    const totalProjects = projects.length;
    let currentIndex = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            project.classList.remove("active");
            project.style.display = "none"; // Hide all projects
        });

        projects[index].classList.add("active");
        projects[index].style.display = "block"; // Show only the active project
    }

    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
            showProject(currentIndex);
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalProjects;
            showProject(currentIndex);
        });
    }

    // Ensure the first project is visible initially
    showProject(currentIndex);

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const formMessage = document.getElementById("formMessage");

            if (name && email && message) {
                formMessage.innerHTML = "Thank you for your message!";
                formMessage.style.color = "green";
                contactForm.reset(); // Clear form after submission
            } else {
                formMessage.innerHTML = "Please fill all fields!";
                formMessage.style.color = "red";
            }
        });
    }

    // LinkedIn & GitHub Profile Redirects
    const linkedInIcon = document.querySelector("#linkedin-icon");
    const githubIcon = document.querySelector("#github-icon");

    if (linkedInIcon) {
        linkedInIcon.addEventListener("click", function () {
            window.open("https://www.linkedin.com/in/swettha-e-bb9aa8257", "_blank");
        });
    }

    if (githubIcon) {
        githubIcon.addEventListener("click", function () {
            window.open("https://github.com/SwetthaE", "_blank");
        });
    }
});
