// Small helper script for the portfolio
// - Sets the current year in the footer
// - Adds `active` class to the current nav link based on URL

document.addEventListener('DOMContentLoaded', function () {
  // Set year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Highlight the current nav link
  try {
    var navLinks = document.querySelectorAll('nav a');
    var path = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      // Compare by filename only
      var linkFile = href.split('/').pop();
      if (linkFile === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  } catch (e) {
    // no-op: fail silently on older browsers
  }
});
