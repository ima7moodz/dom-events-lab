const displayEL = document.querySelector(".display")
const buttonsEl = document.querySelectorAll(".button")

let current = ""
let first = ""
let operators = ""
let isResultDisplayed = false

displayEL.textContent = "0"

const handleNumberClick = (value) => {
  if (isResultDisplayed) {
    current = ""
    isResultDisplayed = false
  }

  if (current === "0") current = ""

  current += value
  displayEL.textContent = current
}

const handleOperatorClick = (operator) => {
  if (first && operators) {
    current = performCalculation(first, current, operators)
    displayEL.textContent = current
  }

  first = current
  operators = operator
  current = ""
}

const handleEqualsClick = () => {
  if (first && operators && current) {
    current = Calculation(first, current, operators)
    displayEL.textContent = current
    first = ""
    operators = ""
    isResultDisplayed = true
  }
}

const handleClear = () => {
  current = ""
  first = ""
  operators = ""
  displayEL.textContent = "0"
}

const Calculation = (first, second, operator) => {
  const firstNumber = Number(first)
  const secondNumber = Number(second)
  let result = 0

  if (operator === "+") {
    result = firstNumber + secondNumber
  } else if (operator === "-") {
    result = firstNumber - secondNumber
  } else if (operator === "*") {
    result = firstNumber * secondNumber
  } else if (operator === "/") {
    if (secondNumber === 0) {
      result = "Error"
    } else {
      result = firstNumber / secondNumber
    }
  }

  return result.toString()
}

buttonsEl.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.innerText

    if (event.target.classList.contains("number")) {
      handleNumberClick(value)
    } else if (event.target.classList.contains("operator")) {
      handleOperatorClick(value)
    } else if (event.target.classList.contains("equals")) {
      handleEqualsClick()
    } else if (event.target.classList.contains("clear")) {
      handleClear()
    }
  })
})
