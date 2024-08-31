const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');

    // Check for text color change based on theme
    const textElements = document.querySelectorAll('.text-color-light-blue');
    textElements.forEach(element => {
        element.classList.toggle('text-color-black', body.classList.contains('light-mode'));
    });
});

// Check for stored theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}


