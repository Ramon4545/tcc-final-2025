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

function whats() {
  const numeroWhatsapp = "5551935010576";
  const mensagem = "Olá! Tenho interesse em saber mais sobre a Academia Top One.";
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensagemCodificada}`;
  window.open(urlWhatsapp, '_blank');
}

function assinarPlanoGold() {
  const numeroWhatsapp = "5551935010576";
  const mensagem = "Olá! Tenho interesse em assinar o Plano Gold (12x R$ 109,90), Gostaria de mais informações para fechar.";
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensagemCodificada}`;
  window.open(urlWhatsapp, '_blank');
}

function assinarPlanoBlack() {
  const numeroWhatsapp = "5551935010576";
  const mensagem = "Olá! Tenho interesse em assinar o Plano Black (12x R$ 89,90), Gostaria de mais informações para fechar.";
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensagemCodificada}`;
  window.open(urlWhatsapp, '_blank');
}

function assinarPlanoRecorrente() {
  const numeroWhatsapp = "5551935010576";
  const mensagem = "Olá! Tenho interesse em assinar o Plano Recorrente (R$ 119,90 / mês), Gostaria de mais informações para fechar.";
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensagemCodificada}`;
  window.open(urlWhatsapp, '_blank');
}

function openModal(modalId, videoUrl) {
  const modal = document.getElementById(modalId);
  if (modal) {
    const player = modal.querySelector('#youtube-player');
    if (player) {
      player.src = videoUrl + "?autoplay=1&mute=1";
    }

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    const player = modal.querySelector('#youtube-player');
    if (player) {
      player.src = "";
    }

    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target.id);
  }
}

const alvo = document.querySelector('.animar');

function animarEntrada() {
  const posicao = alvo.getBoundingClientRect().top;
  const tela = window.innerHeight * 1;

  if (posicao < tela) {
    alvo.classList.add('aparecer');
  }
}

window.addEventListener('scroll', animarEntrada);
animarEntrada();

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

window.addEventListener("load", () => {
  const imagemInicio = document.querySelector(".imgInicio img");
  const titulo = document.querySelector(".txtmotivacao");
  const subtitulo = document.querySelector(".p1");

  if (imagemInicio) {
    imagemInicio.style.opacity = "0";
    imagemInicio.style.transform = "scale(1.1)";

    setTimeout(() => {
      imagemInicio.style.transition = "1.4s ease";
      imagemInicio.style.opacity = "1";
      imagemInicio.style.transform = "scale(1)";
    }, 200);
  }
  [titulo, subtitulo].forEach((el, index) => {
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateX(-60px)";

    setTimeout(() => {
      el.style.transition = "1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, 600 + index * 300);
  });
});


const itensAnimar = document.querySelectorAll(".animar, .card, .cardM, .cx, .plangold, .planblack, .planre");

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("aparecer");
        entrada.target.style.transition = "0.9s ease";
        entrada.target.style.opacity = "1";
        entrada.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

itensAnimar.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  observador.observe(el);
});

function openModal(id, videoUrl) {
  const modal = document.getElementById(id);
  const iframe = document.getElementById("youtube-player");
  modal.style.display = "block";
  iframe.src = videoUrl + "?autoplay=1";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  const iframe = document.getElementById("youtube-player");
  modal.style.display = "none";
  iframe.src = "";
}
const textosSlide = document.querySelectorAll(".slide-left");

const observerSlide = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);
textosSlide.forEach((el) => observerSlide.observe(el));

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




