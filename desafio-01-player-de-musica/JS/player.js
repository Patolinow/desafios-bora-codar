// Intern Elements
let coverArt = document.querySelector('.art')
let musicName = document.querySelector('.music-name')
let artistName = document.querySelector('.artist-name')
let musicDuration = document.querySelector('.music-duration')
let remainingTime = document.querySelector('.remaining-time')
let currentTrack = document.createElement('audio')


// Buttons
const playPause = document.querySelector('.play-and-pause')
const skipR = document.querySelector('.skip-R')
const skipL = document.querySelector('.skip-L')
const musicSlider = document.querySelector('.music-slider')

// On going Elements
let actualTime = 0
let trackIndex = 0
let isPlaying = false
let updateTimer;

const musicList = [
  {
    img: "assets/louie-zong.png",
    name: "Signal/noise",
    artist: "Louie Zong",
    music: "assets/louie-zong-signal_noise.mp3"
  },

  {
    img: "assets/mili.png",
    name: "world.execute(me);",
    artist: "Mili",
    music: "assets/mili-world.execute(me);.mp3"
  }
]

// To load each music
loadTrack(trackIndex)

function loadTrack(trackIndex) {
  clearInterval(updateTimer)
  reset()

  currentTrack.src = musicList[trackIndex].music
  currentTrack.load()

  coverArt.style.backgroundImage = `url('${musicList[trackIndex].img}')`
  musicName.innerHTML = `<h1>${musicList[trackIndex].name}</h1>`
  artistName.innerHTML = `<h2>${musicList[trackIndex].artist}</h2>`

  updateTimer = setInterval(setUpdate, 1000)
  currentTrack.addEventListener('ended', nextTrack)
}

// To reset any music
function reset() {
  remainingTime.textContent = "00:00" // EDITAR PARA COLOCAR O TEMPO FINAL AKI, TA ERRADO
  musicDuration.textContent = "00:00"
  actualTime = 0
}


// To play and pause current music
function playPauseTrack() {
  isPlaying ? pauseTrack() : playTrack()
}

function playTrack() {
  currentTrack.play()
  isPlaying = true
  playPause.src = "assets/pause.svg"
}

function pauseTrack() {
  currentTrack.pause()
  isPlaying = false
  playPause.src = "assets/play.svg"
}

// Change to next or previous tracks
function nextTrack() {
  if (trackIndex < musicList.length - 1) {
    trackIndex += 1
  }

  else {
    trackIndex = 0
  }

  loadTrack(trackIndex)
  playTrack()
}

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex -= 1
  }

  else {
    trackIndex = musicList.length - 1
  }

  loadTrack(trackIndex)
  playTrack()
}

// Update the time bar and timers (remaining time and total time)
function seekTo(trackedPosition) {
  let seekValue = Math.floor(currentTrack.duration * (trackedPosition / 100))
 
  actualTime = seekValue
  currentTrack.currentTime = seekValue
}

function setUpdate() {

  if (currentTrack.duration && isPlaying) {
    actualTime += 1
    let seekPosition = 0
    let currentRemainingTime = Math.floor(currentTrack.duration) - actualTime

    seekPosition = actualTime * (100 / currentTrack.duration)

    musicSlider.value = seekPosition

    let remainingMinutes = Math.floor(currentRemainingTime / 60)
    let remainingSeconds = Math.floor(currentRemainingTime - remainingMinutes * 60)
    let durationMinutes = Math.floor(currentTrack.duration / 60)
    let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60)

    remainingTime.textContent = `${remainingMinutes.toLocaleString('pt-br', { minimumIntegerDigits: 2 })}:
    ${remainingSeconds.toLocaleString('pt-br', { minimumIntegerDigits: 2 })}`

    musicDuration.textContent = `${durationMinutes.toLocaleString('pt-br', { minimumIntegerDigits: 2 })}:
    ${durationSeconds.toLocaleString('pt-br', { minimumIntegerDigits: 2 })}`
  }
}



