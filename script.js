// =======================
// CONFIG
// =======================
const DATA_INICIO = new Date("2026-01-04");

// ✅ COLE AQUI O LINK EMBED DO SPOTIFY
// Exemplo de embed (track):
// https://open.spotify.com/embed/track/XXXXXXXXXXXX
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/track/6EDj1nbl9wo6ivGI1t59G4";


// =======================
// ELEMENTOS
// =======================
const counter = document.getElementById("counter");
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const spPlayer = document.getElementById("sp-player");

// =======================
// CONTADOR
// =======================
function atualizarContador() {
  const dias = Math.floor((Date.now() - DATA_INICIO) / 86400000);
  counter.textContent = `❤️ Juntos há ${dias} dias`;
}
atualizarContador();

// =======================
// CORAÇÕES
// =======================
function criarCoracao(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = (Math.random() * 100) + "vw";
  heart.style.fontSize = (12 + Math.random() * 14) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

let heartsTimer = null;

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

  if (!heartsTimer) heartsTimer = setInterval(criarCoracao, 850);

  // Spotify
  spPlayer.src = SPOTIFY_EMBED_URL;
});

