function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

const form = document.getElementById('contatoForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome     = document.getElementById('nome').value;
    const email    = document.getElementById('email').value;
    const assunto  = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá Alessandra! Vim pelo seu site e gostaria de entrar em contato.%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*E-mail:* ${encodeURIComponent(email)}%0A*Assunto:* ${encodeURIComponent(assunto)}%0A*Mensagem:* ${encodeURIComponent(mensagem)}`;

    window.open(`https://wa.me/5532988350050?text=${texto}`, '_blank');

    form.reset();
  });
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0,0,0,0.6)'
    : 'none';
});
