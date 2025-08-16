document.addEventListener('DOMContentLoaded', () => {
    // === 1. Welcoming Speech (Home Page) ===
    const userNameElement = document.getElementById('userName');
    const name = prompt('Please enter your name:');
    if (name) {
        userNameElement.textContent = name;
    }

    // === 2. Page Navigation ===
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default anchor behavior
            e.preventDefault();

            // Get the target section's ID
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Hide all sections first
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the target section
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});