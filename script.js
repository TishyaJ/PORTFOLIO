// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Typing Effect
const roles = ["Coder", "AI Explorer", "Digital Alchemist"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let roleElement = document.getElementById("role");

function typeEffect() {
    let currentRole = roles[index];
    
    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100; // Speed control (faster delete)

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1500; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length; // Move to next role
        typingSpeed = 500; // Small pause before typing next
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect); // Start effect on page load



// Parallax Scrolling
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    document.getElementById('parallax-bg').style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

// 3D Tilt Effect
const tiltElements = document.querySelectorAll("[data-tilt]");
tiltElements.forEach(el => {
    el.addEventListener("mousemove", (e) => {
        let x = e.offsetX - el.offsetWidth / 2;
        let y = e.offsetY - el.offsetHeight / 2;
        el.style.transform = `rotateY(${x / 10}deg) rotateX(${-y / 10}deg)`;
    });
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("formStatus");
    
    if (name === "" || email === "" || message === "") {
      status.textContent = "Please fill out all fields.";
      status.style.color = "red";
      return;
    }
    
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
    document.getElementById("contactForm").reset();
  });