const btnGeneratePassword = document.querySelector("#btn_generate");
const inputLengthCharacters = document.querySelector("#number");

const addLettersUpper = document.querySelector("#upper");
const addLettersLower = document.querySelector("#lower");
const addNumbers = document.querySelector("#numbers");
const addSpecial = document.querySelector("#special");

let charTypes = [];

function getArrayCharacterSelected() {
  if (!addLettersUpper.checked && !addLettersLower.checked && !addNumbers.checked && !addSpecial.checked) {
    alert("Selecione pelo menos um campo de caracteres");
    return 
  }

  if (addLettersUpper.checked) {
    charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (addLettersLower.checked) {
    charTypes.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (addNumbers.checked) {
    charTypes.push("0123456789");
  }
  if (addSpecial.checked) {
    charTypes.push("!@#$%^&*()-_=+[]{}|;:'`~");
  }

  return charTypes;
}

function getLengthPassword(){
  const size = inputLengthCharacters.value

  if (size === "") {
    alert("Campo caracteres está vazio");
    return
  } else if (size < 4 || size > 25) {
    alert("Apenas 4 a 25 caracteres");
    return
  }

  return size
}

function generateRandomCharacter(charTypes){
  const randomIndex = Math.floor(Math.random() * charTypes.length) 
  
  return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)]
}

function createPassword(size, charTypes){
  let passwordGenerate = ""

  while (passwordGenerate.length < size){
    passwordGenerate += generateRandomCharacter(charTypes)
  }

  return passwordGenerate
}

btnGeneratePassword.addEventListener("click", () => {
  console.log(createPassword(getLengthPassword(), getArrayCharacterSelected()))
  charTypes = []
});












// desenvolver logica para gerar senha com base nos inputs marcados

// mostrar na tela dentro do campo "senha aqui"

// copiar a senha com o botão "copiar"

// adicionar efeitos de alerta (deixar mais bonito)
