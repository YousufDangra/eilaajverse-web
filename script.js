// Optional: Animate fade-in on scroll (if needed)
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.2s';
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  const appleBtn = document.querySelector('.apple-btn');
  const modal = document.getElementById('comingSoonModal');
  const closeBtn = document.querySelector('.close');

  if (appleBtn && modal && closeBtn) {
    appleBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});