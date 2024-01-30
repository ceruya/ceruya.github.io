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
