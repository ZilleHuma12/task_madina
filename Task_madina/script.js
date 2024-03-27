document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
// document.addEventListener("DOMContentLoaded", () => {
//     const contactForm = document.getElementById("contact-form");
  
//     contactForm.addEventListener("submit", event => {
//       event.preventDefault();
//       const nameInput = document.getElementById("name");
//       const emailInput = document.getElementById("email");
//       const messageInput = document.getElementById("message");
      
//       const name = nameInput.value.trim();
//       const email = emailInput.value.trim();
//       const message = messageInput.value.trim();
  
//       if (!name || !email || !message) {
//         alert("Please fill in all the compulsary fields.");
//         return;
//       }
  
//       alert("Form submitted successfully!");
      
//       nameInput.value = "";
//       emailInput.value = "";
//       messageInput.value = "";
//     });
//   });