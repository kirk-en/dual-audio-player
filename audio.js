const beforeSong = new Audio("./audio/Fade-before.wav");
const afterSong = new Audio("./audio/Fade-after.mp3");
afterSong.volume = 0;

const playBtn = document.getElementById("playBtn");
const originalBtn = document.getElementById("originalBtn");
const masteredBtn = document.getElementById("masteredBtn");

playBtn.addEventListener("click", (e) => {
  console.log(e);
  if (beforeSong.paused) {
    beforeSong.play();
    afterSong.play();
    playBtn.innerText = "Pause song";
  } else {
    beforeSong.pause();
    afterSong.pause();
    playBtn.innerText = "Play song";
  }
});
originalBtn.addEventListener("click", () => {
  console.log(beforeSong);
  beforeSong.volume = 1;
  afterSong.volume = 0;
  if (beforeSong.paused) {
    beforeSong.play();
    afterSong.play();
    playBtn.innerText = "Pause song";
  }
});

masteredBtn.addEventListener("click", () => {
  beforeSong.volume = 0;
  afterSong.volume = 1;
  if (beforeSong.paused) {
    beforeSong.play();
    afterSong.play();
    playBtn.innerText = "Pause song";
  }
});
beforeSong.addEventListener("ended", () => {
  playBtn.innerText = "Play song";
});
