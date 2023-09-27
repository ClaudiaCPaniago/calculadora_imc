const altura = document.querySelector("#altura");
const nome = document.querySelector("#nome");
const peso = document.querySelector("#peso");
const resultado = document.querySelector("#resultado");

const calcIMC = () => {
  let classification = "";
  let imc = 0.0;

  if (peso.value !== "" && altura.value !== "") {
    imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    if (imc < 18.5) {
      classification = "Abaixo do peso";
    } else if (imc < 25) {
      classification = "Intervalo normal";
    } else if (imc < 30) {
      classification = "Sobrepeso";
    } else if (imc < 35) {
      classification = "Obesidade classe I";
    } else if (imc < 40) {
      classification = "Obesidade classe II";
    } else {
      classification = "Obesidade classe III";
    }
    resultado.innerHTML = `${nome.value} seu IMC é ${imc} - ${classification}`;
  } else {
    resultado.innerHTML = "O valor fornecido não é válido";
  }
};
