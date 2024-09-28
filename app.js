const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".button")

let current = ""
let first = ""
let operators = ""
let isResultDisplayed = false

display.innerText = "0"

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.innerText

    if (event.target.classList.contains("number")) {
      if (isResultDisplayed) {
        current = ""
        isResultDisplayed = false
      }

      if (current === "0") current = ""

      current += value
      display.innerText = current
    }

    if (event.target.classList.contains("operators")) {
      if (first && operators) {
        current = calculate(first, current, operators)
        display.innerText = current
      }

      first = current
      operators = value
      current = ""
    }

    if (event.target.classList.contains("equals")) {
      if (first && operators && current) {
        current = calculate(first, current, operators)
        display.innerText = current
        first = ""
        operators = ""
        isResultDisplayed = true
      }
    }

    if (event.target.classList.contains("clear")) {
      current = ""
      first = ""
      operators = ""
      display.innerText = "0"
    }
  })
})

calculate = (first, second, operators) => {
  let result
  const firstNumber = parseFloat(first)
  const secondNumber = parseFloat(second)

  if (operators === "+") {
    result = firstNumber + secondNumber
  } else if (operators === "-") {
    result = firstNumber - secondNumber
  } else if (operators === "*") {
    result = firstNumber * secondNumber
  } else if (operators === "/") {
    if (secondNumber === 0) {
      result = "Error"
    } else {
      result = firstNumber / secondNumber
    }
  } else {
    result = secondNumber
  }

  return result.toString()
}
