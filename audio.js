const beforeSong = new Audio("./audio/Fade-before.wav");
const afterSong = new Audio("./audio/Fade-after.mp3");
afterSong.volume = 0;

const playBtn = document.getElementById("playBtn");
const originalBtn = document.getElementById("originalBtn");
const masteredBtn = document.getElementById("masteredBtn");

playBtn.addEventListener("click", (e) => {
  if (beforeSong.paused) {
    beforeSong.play();
    afterSong.play();
    playBtn.innerText = "⏸";
    beforeSong.volume === 1
      ? originalBtn.classList.add("audio__button--active")
      : masteredBtn.classList.add("audio__button--active");
  } else {
    beforeSong.pause();
    afterSong.pause();
    playBtn.innerText = "▶";
  }
});
originalBtn.addEventListener("click", () => {
  beforeSong.volume = 1;
  originalBtn.classList.add("audio__button--active");
  afterSong.volume = 0;
  masteredBtn.classList.remove("audio__button--active");
  if (beforeSong.paused) {
    beforeSong.play();
    afterSong.play();
    playBtn.innerText = "⏸";
  }
});

masteredBtn.addEventListener("click", () => {
  beforeSong.volume = 0;
  originalBtn.classList.remove("audio__button--active");
  afterSong.volume = 1;
  masteredBtn.classList.add("audio__button--active");
  if (beforeSong.paused) {
    beforeSong.play();
    afterSong.play();
    playBtn.innerText = "⏸";
  }
});
beforeSong.addEventListener("ended", () => {
  playBtn.innerText = "▶";
});
