function calcular() {

    let nome = document.getElementById('nome').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let sexo = document.getElementById('sexo').value;
    let resultado = "";
    let imc = peso / (altura * altura);

    if (isNaN(peso) || isNaN(altura)){
        document.getElementById(resultado).value = "Por favor, insira números válidos.";
        return;
    }

    if (sexo == 'fem') {
    if (imc < 18.5) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está abaixo do peso`;
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está no peso ideal`;
    } 
    else if (imc >= 25 && imc <= 29.9) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está com sobrepeso`;
    } 
    else if (imc >= 30 && imc <= 34.9) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está em obesidade grau 1`;
    } 
    else if (imc >= 35 && imc <= 39.9) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está em obesidade grau 2`;
    } 
    else {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está em obesidade grau 3`;
    }
}

    if (sexo == 'fem') {
    if (imc < 19) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está abaixo do peso`;
    } 
    else if (imc <= 23.9) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está no peso ideal`;
    } 
    else if (imc <= 28.9) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está com sobrepeso`;
    } 
    else if (imc <= 33.9) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está em obesidade grau 1`;
    } 
    else if (imc <= 38.9) {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está em obesidade grau 2`;
    } 
    else {
        resultado.value = `${nome}, seu IMC é de: ${imc.toFixed(2)}. Você está em obesidade grau 3`;
    }
}

}