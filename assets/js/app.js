// app.js
import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
emailjs.init("4eW0P2m6SOZnjVeq_"); // Replace with your EmailJS User ID

document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars
  document.querySelectorAll('.bar > i[data-width]').forEach(el => {
    const w = el.getAttribute('data-width');
    requestAnimationFrame(() => el.style.width = w);
  });

  // Active nav highlight
  const page = document.body.getAttribute('data-page');
  if(page){
    document.querySelectorAll('.nav a[data-page]').forEach(a => {
      if(a.getAttribute('data-page') === page){ 
        a.classList.add('active'); 
      }
    });
  }

  // Contact form
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');

  function showToast(message, isError=false){
    toast.textContent = message;
    toast.className = 'toast show' + (isError ? ' error' : '');
    setTimeout(() => {
      toast.className = 'toast';
    }, 3000);
  }

  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      emailjs.sendForm('service_i56laug', 'template_1okn5zl', form)
        .then(() => {
          showToast("Message sent successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          showToast("Oops! Something went wrong.", true);
        });
    });
  }
});
