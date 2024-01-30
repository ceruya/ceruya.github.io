// Select all internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each link
internalLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Get the target element and its position
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top;

    // Scroll smoothly to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Select the dark mode toggle button
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// Add click event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle('dark-mode');

  // Update the toggle button text
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Light Mode';
  } else {
    darkModeToggle.textContent = 'Dark Mode';
  }
});