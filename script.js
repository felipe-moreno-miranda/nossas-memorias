// =======================
// CONFIG
// =======================
const DATA_INICIO = new Date("2026-01-04");

// Spotify embed que funcionou
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/track/6EDj1nbl9wo6ivGI1t59G4";

const TEXTO =
`Entre o mundo correndo e o tempo apertado…
às vezes eu me perdi no trabalho.
Mas nunca me perdi de você.

Porque mesmo nos dias mais cansados,
é você que eu escolho amar.`;

// =======================
// ELEMENTOS
// =======================
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const counter = document.getElementById("counter");
const typeEl = document.getElementById("typewriter");
const caret = document.querySelector(".caret");
const spPlayer = document.getElementById("sp-player");

// =======================
// FUNÇÕES
// =======================
function diasJuntos() {
  return Math.floor((Date.now() - DATA_INICIO) / 86400000);
}

function atualizarContador() {
  const dias = diasJuntos();
  counter.textContent = `❤️ ${dias} dias aprendendo a amar você.`;
}

function typeWriter(text) {
  typeEl.textContent = "";
  caret.style.opacity = "1";
  let i = 0;

  const timer = setInterval(() => {
    typeEl.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(timer);
      setTimeout(() => caret.style.opacity = "0", 800);
    }
  }, 28);
}

/* CORAÇÕES */
function criarCoracao() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 16) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  heart.style.opacity = (0.6 + Math.random() * 0.4).toFixed(2);

  document.body.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

// =======================
// START
// =======================
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";

  new Swiper(".swiper", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    speed: 900
  });

  spPlayer.src = SPOTIFY_EMBED_URL;

  atualizarContador();
  typeWriter(TEXTO);

  // inicia corações
  setInterval(criarCoracao, 900);
});

