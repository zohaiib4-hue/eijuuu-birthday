// Gift Open
const giftBox = document.getElementById("giftBox");
const giftScreen = document.getElementById("giftScreen");
const website = document.getElementById("website");

if (giftBox) {
  giftBox.addEventListener("click", () => {
    giftScreen.style.display = "none";
    website.classList.remove("hidden");
  });
}

// Countdown (19 August 2026)
const targetDate = new Date("August 19, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return;

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Slideshow
const photos = [
  "images/1.jpg",
  "images/IMG_3607.jpeg",
  "images/IMG_3612.jpeg",
  "images/IMG_6124.jpeg",
  "images/IMG_7848.jpeg",
  "images/IMG_8394.jpeg",
  "images/IMG_8407.jpeg",
  "images/IMG_8411.jpeg",
  "images/IMG_8414.jpeg",
  "images/IMG_8416.jpeg"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  if (slide) {
    current++;
    if (current >= photos.length) current = 0;
    slide.src = photos[current];
  }
}, 3000);

// Music Button
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.innerHTML = "⏸ Pause Music";
    } else {
      music.pause();
      musicBtn.innerHTML = "▶ Play Music";
    }
  });
}

// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "floatUp 6s linear forwards";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);

// Hide Loader
window.onload = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};
