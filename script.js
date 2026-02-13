const DATA_INICIO = new Date("2026-01-04");
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/track/6EDj1nbl9wo6ivGI1t59G4";

const TEXTO =
`Entre o mundo correndo e o tempo apertado…
às vezes eu me perdi no trabalho.
Mas nunca me perdi de você.

Porque mesmo nos dias mais cansados,
é você que eu escolho amar.`;

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const counter = document.getElementById("counter");
const typeEl = document.getElementById("typewriter");
const caret = document.querySelector(".caret");
const spPlayer = document.getElementById("sp-player");

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
});
