// Brew & Co — Main Script

// ── Mobile navigation toggle ──────────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function () {
  // Add or remove the 'open' class — CSS handles the show/hide
  navLinks.classList.toggle('open');

  // Swap the button icon so the user gets visual feedback
  const isOpen = navLinks.classList.contains('open');
  navToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;'; // ✕ or ☰

  // Update aria attribute for screen readers
  navToggle.setAttribute('aria-expanded', isOpen);
});


// ── Contact form submission feedback ─────────────────────────────────────────
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    // Prevent the page from reloading (there's no real server to send to)
    event.preventDefault();

    // Replace the form with a friendly confirmation message
    contactForm.innerHTML = `
      <p class="form-success">
        Thanks for your message! We'll be in touch soon. ☕
      </p>
    `;
  });
}
