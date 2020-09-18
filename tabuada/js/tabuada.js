window.onload = function() {
    var valor = document.getElementById("valor");
    var aux;
    var botao = document.getElementById("mult");
    var resultado = document.getElementById("resultado");

    botao.onclick = function() {
        var i = 1;
        while (i <= 10) {
            
            aux = i * valor.value;
            resultado.innerHTML += valor.value+" x "+i +" = " + aux +"<br>";           
            i++;
        }
        
    }
}