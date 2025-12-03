function trocarFoto(img) {
  document.getElementById("foto-principal").src = img.src;
}

document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

function agendarAula() {
  const numeroWhatsapp = "5551935010576";
  const mensagem = "Olá! Gostaria de agendar uma aula experimental na Academia Top One.";
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensagemCodificada}`;
  window.open(urlWhatsapp, '_blank');
}

const body = document.querySelector('body');
const hamburguer = document.querySelector('.hamburguer');
const navPrincipal = document.querySelector('nav');

function toggleMobileMenu() {
  navPrincipal.classList.toggle('active');
  hamburguer.classList.toggle('active');
  body.classList.toggle('blur');
}

function closeMobileMenu() {
  if (navPrincipal && navPrincipal.classList.contains('active')) {
    navPrincipal.classList.remove('active');
    hamburguer.classList.remove('active');
    body.classList.remove('blur');
  }
}
if (hamburguer) {
  hamburguer.addEventListener('click', toggleMobileMenu);
}

if (body) {
  body.addEventListener('click', function (event) {

    if (body.classList.contains('blur') &&
      !navPrincipal.contains(event.target) &&
      !hamburguer.contains(event.target)) {

      closeMobileMenu();
    }
  });
}

