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
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = document.getElementById('btnEnviar');
    const sucesso = document.getElementById('sucesso');
    const erro = document.getElementById('erro');

    btn.textContent = 'Enviando...';
    btn.disabled = true;
    sucesso.style.display = 'none';
    erro.style.display = 'none';

    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mbdelyva', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        sucesso.style.display = 'block';
        form.reset();
        setTimeout(() => { sucesso.style.display = 'none'; }, 6000);
      } else {
        erro.style.display = 'block';
      }
    } catch {
      erro.style.display = 'block';
    }

    btn.textContent = 'Enviar mensagem';
    btn.disabled = false;
  });
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0,0,0,0.6)'
    : 'none';
});
