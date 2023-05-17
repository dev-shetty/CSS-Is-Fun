const play = document.querySelector("[data-play-pause]")

play.onclick = () => {
  if (play.classList.contains("ti-player-play-filled")) {
    play.classList.remove("ti-player-play-filled")
    play.classList.add("ti-player-pause-filled")
  } else {
    play.classList.remove("ti-player-pause-filled")
    play.classList.add("ti-player-play-filled")
  }
}
