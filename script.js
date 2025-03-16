// script.js - Enhanced Interactions and Animations

// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('themeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Light Mode';
}

// Reveal on Scroll Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial trigger

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Interactive Hover Effect
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'rotateY(10deg)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg)';
    });
});

// Welcome Message
console.log('Welcome to EilaajVerse - Empowering Future Healthcare!');

//automatic slideshow
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function changeSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
        index = (index + 1) % slides.length;
    }

    setInterval(changeSlide, 4000); // Change slide every 4 seconds
});

// Function to Open Popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to Close Popup
function closesPopup() {
    document.getElementById('popup').style.display = 'none';
}

// Show the popup notification
function showPopup() {
    const pdfUrl = 'whitepaper.pdf';
    const pdfName = 'whitepaper.pdf'; 
    const popup = document.getElementById('popupNotification');
    popup.style.display = 'flex';

    // Redirect to the App Store after 3 seconds
    setTimeout(() => {
        window.location.href = '';
    }, 3000);
}

// Close the popup notification
function closePopup() {
    document.getElementById('popupNotification').style.display = 'none';
}

// Ensure the navbar toggle works correctly
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Debug check
    console.log("menuToggle:", menuToggle);
    console.log("navLinks:", navLinks);

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            console.log("Menu toggled!"); // Debug output
        });
    } else {
        console.error("menuToggle or navLinks not found!");
    }
});


