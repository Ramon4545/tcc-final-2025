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


document.querySelectorAll(".toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {

        const content = toggle.nextElementSibling;
        const symbol = toggle.querySelector("span");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            toggle.classList.remove("active");

            if (symbol) symbol.textContent = "+";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            toggle.classList.add("active");

            if (symbol) symbol.textContent = "−";
        }
    });
});

function toggleAccordion(element) {
    const hiddenContent = element.nextElementSibling;
    const icon = element.querySelector('span');

    if (hiddenContent.style.display === "block") {
        hiddenContent.style.display = "none";
        icon.textContent = "+";
    } else {
        hiddenContent.style.display = "block";
        icon.textContent = "-";
    }
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado-imc');

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.innerHTML = `<p style="color: red;">Por favor, insira valores válidos para peso e altura.</p>`;
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let cor = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        cor = '#e74c3c';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso ideal (Parabéns!)';
        cor = '#2ecc71';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Levemente acima do peso';
        cor = '#f1c40f';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau I';
        cor = '#e67e22';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau II (severa)';
        cor = '#d35400';
    } else {
        classificacao = 'Obesidade grau III (mórbida)';
        cor = '#c0392b';
    }

    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <h3 style="color: ${cor};">Seu IMC é: ${imc.toFixed(2)}</h3>
        <p>Classificação: <strong>${classificacao}</strong></p>
    `;
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


