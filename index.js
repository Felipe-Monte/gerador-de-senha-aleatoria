const btnGenerate = document.querySelector("#btn_generate")
const inputCharacter = document.querySelector("#number")

const checkboxUpper = document.querySelector("#upper")
const checkboxLower = document.querySelector("#lower")
const checkboxNumber = document.querySelector("#numbers")
const checkboxSpecial = document.querySelector("#special")

let charTypes = []

btnGenerate.addEventListener("click", () => { 
  
  if(inputCharacter.value === ""){
    return alert("Campo caracteres está vazio")
  }else if(inputCharacter.value < 4 || inputCharacter.value > 25){
    return alert("Apenas 4 a 25 caracteres")
  }

  if(!checkboxUpper.checked && !checkboxLower.checked && !checkboxNumber.checked && !checkboxSpecial.checked){
    return alert("Selecione pelo menos um campo de caracteres")
  }

  // pegar quando os checkbox estiverem marcados ou não 
  if(checkboxUpper.checked){
    charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    console.log(charTypes)
  }
  // if(checkboxLower.checked){
  //   charTypes.push("abcdefghijklmnopqrstuvwxyz")
  // }
  // if(checkboxNumber.checked){
  //   charTypes.push("0123456789")
  // }
  // if(checkboxSpecial.checked){
  //   charTypes.push("!@#$%^&*()-_=+[]{}|;:'`~")
  // }

})























// desenvolver logica para gerar senha com base nos inputs marcados

// mostrar na tela dentro do campo "senha aqui"

// copiar a senha com o botão "copiar"

// adicionar efeitos 
