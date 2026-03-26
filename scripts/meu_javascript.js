function calcular(operacao) {
    
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let resultado = 0;

    if (isNaN(n1) || isNaN(n2)){
        document.getElementById(resultado).value = "Por favor, insira números válidos.";
        return;
    }

    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
    }

    document.getElementById('resultado').value = resultado.toFixed(2);

}