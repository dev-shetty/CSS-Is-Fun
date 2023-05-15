const carousel = document.querySelector(".grid-carousel")

const totalImages = 40

for (let i = 1; i <= totalImages; i++) {
  // Generating Images
  const div = document.createElement("div")
  div.classList.add("carousel-item")
  div.setAttribute("data-active", false)
  const img = document.createElement("img")
  img.setAttribute("src", `https://picsum.photos/400/400?random=${i}`)
  img.setAttribute("alt", `Image ${i}`)
  div.appendChild(img)

  carousel.appendChild(div)

  // Getting columns based on the total images
  // Currently for every 5 image 1 column is increased and 2 is by default
  const totalColumns = parseInt(totalImages / 5) + 2
  carousel.style.setProperty("--columns", totalColumns)
}

const images = document.querySelectorAll(".carousel-item")

images.forEach((img) => {
  img.addEventListener("click", () => {
    const isActive = img.getAttribute("data-active")
    if (isActive === "false") {
      img.style.gridColumn = "span 2"
      img.style.gridRow = "span 2"
      img.setAttribute("data-active", true)
    } else {
      img.style.gridColumn = "span 1"
      img.style.gridRow = "span 1"
      img.setAttribute("data-active", false)
    }
  })
})
