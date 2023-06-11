const answer = document.querySelectorAll(".answer")
const toggleBtns = document.querySelectorAll(".btn")

toggleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log(index)
    if (answer[index].getAttribute("data-hidden") === "true") {
      answer[index].setAttribute("data-hidden", "false")
      btn.classList.add("fa-angle-up")
    } else {
      answer[index].setAttribute("data-hidden", "true")
      btn.classList.remove("fa-angle-up")
      btn.classList.add("fa-angle-down")
    }
  })
})
