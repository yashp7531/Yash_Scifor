document.addEventListener("DOMContentLoaded", function () {
  // Form validation
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields");
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    return true;
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Responsive navigation menu
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navbarCollapse.classList.remove("show");
    });
  });
});
