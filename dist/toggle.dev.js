"use strict";

var themeToggle = document.getElementById('theme-toggle');
var body = document.body;
themeToggle.addEventListener('click', function () {
  body.classList.toggle('light-mode');
  localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark'); // Check for text color change based on theme

  var textElements = document.querySelectorAll('.text-color-light-blue');
  textElements.forEach(function (element) {
    element.classList.toggle('text-color-black', body.classList.contains('light-mode'));
  });
}); // Check for stored theme preference

var savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);
}
//# sourceMappingURL=toggle.dev.js.map
