const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  })
})

