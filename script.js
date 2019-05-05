const form = document.querySelector("form")
const inputs = document.querySelectorAll("input")
let error = ""

const getErrorMessages = input => {
  if (input.type == "email") {
    return "Please input an email"
  } else if (input.type == "password") {
    return "Password must be between 6 and 15 characters"
  } else if (input.type == "number") {
    return "Enter a 4 digit zip code"
  } else {
    return "Please enter a real country"
  }
}

inputs.forEach( (val, num) => {
  inputs[num].addEventListener("input", () => {
    inputs[num].checkValidity()
    error = document.querySelector(`#${inputs[num].id} + .error`)
    if (inputs[num].validity.valid) {
      error.innerHTML = ""
      error.className = "error"
      inputs[num].className = ""
    }
  })
})

inputs.forEach( (val, num) => {
  inputs[num].addEventListener("invalid", () => {
    error = document.querySelector(`#${inputs[num].id} + .error`)
    error.innerHTML = getErrorMessages(inputs[num])
    error.className = "error active"
    inputs[num].className = "invalid"
  })
})

form.addEventListener("submit", () => {
  inputs.forEach( (val, num) => {
    error = document.querySelector(`#${inputs[num].id} + .error`)
    if (inputs[num].value == "") {
      error.innerHTML = "This field is required!"
      error.className = "error active"
      inputs[num].className = "invalid"
      event.preventDefault()
    } else if (!inputs[num].validity.valid) {
      error.innerHTML = getErrorMessages(inputs[num])
      error.className = "error active"
      inputs[num].className = "invalid"
      event.preventDefault()
    }
  })
})