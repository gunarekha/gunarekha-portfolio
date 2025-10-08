// app.js
import * as emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';

// Initialize EmailJS with your public User ID
emailjs.init("4eW0P2m6SOZnjVeq_"); // Replace with your User ID

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link
  const page = document.body.getAttribute('data-page');
  if(page){
    document.querySelectorAll('.nav a[data-page]').forEach(a => {
      if(a.getAttribute('data-page') === page) a.classList.add('active');
    });
  }

  // Contact form
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');

  function showToast(message, isError=false){
    toast.textContent = message;
    toast.className = 'toast show' + (isError ? ' error' : '');
    setTimeout(() => toast.className = 'toast', 3000);
  }

  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      emailjs.sendForm('service_i56laug', 'template_1okn5zl', form)
        .then(() => {
          showToast("Message sent successfully!");
          form.reset();
        })
        .catch((err) => {
          console.error("EmailJS error:", err);
          showToast("Oops! Something went wrong.", true);
        });
    });
  }
});
