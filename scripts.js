function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

function enviarFormulario(e) {
  e.preventDefault();
  const sucesso = document.getElementById('sucesso');
  sucesso.style.display = 'block';
  e.target.reset();
  setTimeout(() => { sucesso.style.display = 'none'; }, 5000);
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0,0,0,0.6)'
    : 'none';
});
