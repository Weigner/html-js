window.onload = function() {
    var valor1 = document.getElementById("valor1");
    var valor2 = document.getElementById("valor2");
    var botao = document.getElementById("mult");
    var resultado = document.getElementById("resultado");

    botao.onclick = function() {
        var i = 1;
        while (i < 10) {
            
            resultado.innerHTML += valor1.value * valor2.value + "<br>";
            i++;
        }
    }
}