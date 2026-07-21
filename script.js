/**
 * Dr. Jyotiprava Mohanta – Portfolio
 * Minimal JavaScript for future enhancements or interactive features.
 */
(function () {
  'use strict';

  console.log('✨ Dr. Jyotiprava Mohanta · Portfolio loaded successfully.');

  // Example: smooth anchor scroll if any internal links are added later
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Optional: dynamic year in footer (if needed)
  const footer = document.querySelector('.footer-small');
  if (footer) {
    const year = new Date().getFullYear();
    // Only update if the text contains a placeholder; otherwise keep static.
    if (footer.textContent.includes('2026')) {
      footer.textContent = footer.textContent.replace('2026', year);
    }
  }

})();
