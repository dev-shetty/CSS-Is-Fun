const result = document.getElementById("result")

function createCounter() {
  let count = 0
  return function setCount(state) {
    if (state === "increment") {
      count++
    } else if (state === "decrement") {
      count--
    } else {
      console.log("Operation not defined!")
    }
    result.innerText = count
  }
}

const counter = createCounter()

function increment() {
  counter("increment")
}

function decrement() {
  counter("decrement")
}
