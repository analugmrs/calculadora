function calcular(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);

    var op = document.getElementById('op').value;

    if (op == "+"){
        resultado = n1 + n2;
        document.getElementById('resultado').innerHTML = "<h2>" + resultado + "</h2>";
    }
    else if (op == "-"){
        resultado = n1 - n2;
        document.getElementById('resultado').innerHTML = "<h2>" + resultado + "</h2>";
    }
    else if (op == "/" || op == ":"){
        resultado = n1 / n2;
        document.getElementById('resultado').innerHTML = "<h2>" + resultado + "</h2>";
    }
    else if (op == "*" || op == "x"){
        resultado = n1 * n2;
        document.getElementById('resultado').innerHTML = "<h2>" + resultado + "</h2>";
    }
    else {
        document.getElementById('resultado').innerHTML = "Inválido.";
    }
}