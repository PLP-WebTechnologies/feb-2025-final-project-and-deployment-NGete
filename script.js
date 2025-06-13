
// Slider functionality
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));
  setInterval(() => showSlide(index + 1), 5000);

  // Form validation
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields.');
    }
  });
});