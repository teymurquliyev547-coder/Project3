// Small helper script for the portfolio
// - Sets the current year in the footer
// - Adds `active` class to the current nav link based on URL

document.addEventListener('DOMContentLoaded', function () {
  // Minimal confirmation for debugging
  console.log('Site loaded — portfolio initialized');

  // Set year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Highlight the current nav link
  // NOTE: the `active` class is applied here so it is not duplicated in the HTML markup.
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
