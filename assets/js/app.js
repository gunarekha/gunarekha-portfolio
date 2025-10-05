
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
});
