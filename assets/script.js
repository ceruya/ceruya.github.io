// Select all internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each link
internalLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Get the target element and its position
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Get the height of the fixed navbar
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar.offsetHeight;

    // Scroll smoothly to the target position with consideration for navbar height
    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight + 1, // Adding a small offset
      behavior: 'smooth'
    });
  });
});

// Navbar active 
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-link");

  // Function to add or remove the "active" class
  function toggleActiveClass(targetId) {
    navItems.forEach((navItem) => {
      const href = navItem.getAttribute("href").slice(1);
      navItem.classList.toggle("active", href === targetId);
    });
  }

// Event listener for scroll
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      toggleActiveClass(current);

      ticking = false;
    });

    ticking = true;
  }
});

    toggleActiveClass(current);
  });

  // Event listener for click on navigation links
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = navItem.getAttribute("href").slice(1);

      // Scroll to the target section
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth"
      });

      // Add or remove the "active" class
      toggleActiveClass(targetId);
    });
  });
});
