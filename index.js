const btnGeneratePassword = document.querySelector("#btn_generate")
const inputLengthCharacters = document.querySelector("#number")

const addLettersUpper = document.querySelector("#upper")
const addLettersLower = document.querySelector("#lower")
const addNumbers = document.querySelector("#numbers")
const addSpecial = document.querySelector("#special")

let charTypes = []

btnGeneratePassword.addEventListener("click", () => { 

  if(inputLengthCharacters.value === ""){
    return alert("Campo caracteres está vazio")
  }else if(inputLengthCharacters.value < 4 || inputLengthCharacters.value > 25){
    return alert("Apenas 4 a 25 caracteres")
  }

  if(!addLettersUpper.checked && !addLettersLower.checked && !addNumbers.checked && !addSpecial.checked){
    return alert("Selecione pelo menos um campo de caracteres")
  }

  if(addLettersUpper.checked){
    charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }
  if(addLettersLower.checked){
    charTypes.push("abcdefghijklmnopqrstuvwxyz")
  }
  if(addNumbers.checked){
    charTypes.push("0123456789")
  }
  if(addSpecial.checked){
    charTypes.push("!@#$%^&*()-_=+[]{}|;:'`~")
  }
  return charTypes


})























// desenvolver logica para gerar senha com base nos inputs marcados

// mostrar na tela dentro do campo "senha aqui"

// copiar a senha com o botão "copiar"

// adicionar efeitos 
