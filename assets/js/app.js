// Animate skill bars + active nav highlight
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bar > i[data-width]').forEach(el => {
    const w = el.getAttribute('data-width');
    requestAnimationFrame(() => el.style.width = w);
  });

  const page = document.body.getAttribute('data-page');
  if(page){
    document.querySelectorAll('.nav a[data-page]').forEach(a => {
      if(a.getAttribute('data-page') === page){ a.classList.add('active'); }
    });
  }

  // ===== EmailJS Contact Form Integration =====
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if(contactForm){ // make sure form exists on this page
    contactForm.addEventListener("submit", function(e){
      e.preventDefault(); // prevent page reload

      emailjs.sendForm("service_i56laug", "template_ffq4z1c", this)
        .then(() => {
          formStatus.textContent = "Message sent successfully!";
          formStatus.style.color = "green";
          contactForm.reset();
        })
        .catch((error) => {
          formStatus.textContent = "Oops! Something went wrong.";
          formStatus.style.color = "red";
          console.error("EmailJS error:", error); // <-- shows real error
        });
    });
  }
});
