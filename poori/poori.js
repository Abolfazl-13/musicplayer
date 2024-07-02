const image = document.getElementById("cover"),
  title = document.getElementById("music-title"),
  artist = document.getElementById("music-artist"),
  currentTimeEl = document.getElementById("current-time"),
  durationEl = document.getElementById("duration"),
  progress = document.getElementById("progress"),
  playerProgress = document.getElementById("player-progress"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  playBtn = document.getElementById("play"),
  background = document.getElementById("bg-img");

const music = new Audio();

const songs = [
  {
    path: "./music/16ta34-Hitava-Poori.mp3",
    displayName: "16 ta 34",
    cover: "./images/poori.jpg",
    artist: "God poori",
  },
  {
    path: "./music/Asheghe-To-In-Khoonam-Hitava1-Poori.mp3",
    displayName: "Asheghe To In Khoonam",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Baba-Hitava1-Poori.mp3",
    displayName: "Baba",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Boro-Baba-hitava1-Poori.mp3",
    displayName: "Boro Baba",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Gij-Mire-Saram-hitava1-Poori.mp3",
    displayName: "Gij Mire Saram",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Goolle-Ho3ein-hitavaw-Poori.mp3",
    displayName: "Goolle",
    cover: "./images/poori.jpg",
    artist: "God Poori&Ho3ein&Sefat",
  },
  {
    path: "./music/Halaaaale-Shayea.mp3",
    displayName: "Halale",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },

  {
    path: "./music/Heydari-hitava1-Poori.mp3",
    displayName: "Heydari",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Hichki-Be-Joz-To-Hitava1-Poori.mp3",
    displayName: "Hichki Be Joz To",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Ma-Baham-Fargh-Darim-Hitava1-Poori.mp3",
    displayName: "Ma Baham Fargh Darim",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Mahalle-hitava1-Poori.mp3",
    displayName: "Mahalle",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Maskan-Mehr-hitava1-Poori.mp3",
    displayName: "Maskan Mehr",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Poori - Ajal.mp3",
    displayName: " Ajal",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Poori - Emaale.mp3",
    displayName: "Emaale",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Poori - Emirate.mp3",
    displayName: "Emirate",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Poori - Grand Pow (320).mp3",
    displayName: "Grand Pow",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Poori - Shibe Marg.mp3",
    displayName: "Shibe Marg",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
  {
    path: "./music/Poori - Troy.mp3",
    displayName: "Troy",
    cover: "./images/poori.jpg",
    artist: "God Poori",
  },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  // Change play button icon
  playBtn.classList.replace("fa-play", "fa-pause");
  // Set button hover title
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  // Change pause button icon
  playBtn.classList.replace("fa-pause", "fa-play");
  // Set button hover title
  playBtn.setAttribute("title", "Play");
  music.pause();
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener("ended", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);

loadMusic(songs[musicIndex]);
