const next = document.querySelector(".next")
const previous = document.querySelector(".previous")
const images = document.querySelectorAll(".carousel")

function getActiveIndex() {
  const activeImage = document.querySelector('.carousel[data-active="true"]')
  activeImage.setAttribute("data-active", "false")
  const _activeIndex = activeImage.getAttribute("data-index")
  const activeIndex = parseInt(_activeIndex)
  return activeIndex
}

next.addEventListener("click", () => {
  const activeIndex = getActiveIndex()
  const currentIndex = (activeIndex + 1) % images.length
  images[currentIndex].setAttribute("data-active", "true")
})

previous.addEventListener("click", () => {
  const activeIndex = getActiveIndex()
  const currentIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
  images[currentIndex].setAttribute("data-active", "true")
})
