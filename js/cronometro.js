const inputReps = document.getElementById("inputReps");
const btnGenerate = document.getElementById("btnGenerate");
const btnReset = document.getElementById("btnReset");
const btnDone = document.getElementById("btnDone");

const timer = document.getElementById("timer");
const timerLabel = document.getElementById("timerLabel");
const statusDiv = document.getElementById("status");

const btnPause = document.getElementById("btnPause");
const btnSkip = document.getElementById("btnSkip");

let total = 0;
let current = 0;
let remaining = 0;
let interval = null;
let paused = false;

function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
}

function renderStatus() {
    statusDiv.innerHTML = "";

    for (let i = 1; i <= total; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.textContent = i;

        if (i < current) dot.classList.add("done");
        if (i === current) dot.classList.add("current");

        statusDiv.appendChild(dot);
    }
}

function startRest() {
    remaining = 60;
    paused = false;

    timerLabel.textContent = "Descanso";
    timer.textContent = formatTime(remaining);

    btnPause.classList.remove("hidden");
    btnSkip.classList.remove("hidden");
    btnDone.disabled = true;

    clearInterval(interval);
    interval = setInterval(() => {
        if (!paused) {
            remaining--;
            timer.textContent = formatTime(remaining);

            if (remaining <= 0) {
                endRest();
            }
        }
    }, 1000);
}

function endRest() {
    clearInterval(interval);

    btnPause.classList.add("hidden");
    btnSkip.classList.add("hidden");
    btnDone.disabled = false;

    timer.textContent = "00:00";
    timerLabel.textContent = "Pronto";

    current++;
    renderStatus();


    if (current > total) {
        timerLabel.textContent = "Treino concluído";
        btnDone.disabled = true;
    }
}


btnGenerate.addEventListener("click", () => {
    total = parseInt(inputReps.value);
    current = 1;

    timer.textContent = "00:00";
    timerLabel.textContent = "Pronto";
    btnDone.disabled = false;

    renderStatus();
});


btnDone.addEventListener("click", () => {
    if (current <= total) {
        startRest();
    }
});


btnPause.addEventListener("click", () => {
    paused = !paused;
    btnPause.textContent = paused ? "Retomar" : "Pausar";
});


btnSkip.addEventListener("click", () => {
    endRest();
});

btnReset.addEventListener("click", () => {
    clearInterval(interval);
    total = 0;
    current = 0;
    remaining = 0;

    timer.textContent = "00:00";
    timerLabel.textContent = "Pronto";

    statusDiv.innerHTML = "";

    btnDone.disabled = false;
    btnPause.classList.add("hidden");
    btnSkip.classList.add("hidden");
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



