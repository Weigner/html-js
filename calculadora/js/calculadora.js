window.onload = function() {
    var valor1 = document.getElementById("valor1");
    var valor2 = document.getElementById("valor2");
    var valor3 = document.getElementById("valor3");
    var valor4 = document.getElementById("valor4");
    var valor5 = document.getElementById("valor5");
    var valor6 = document.getElementById("valor6");
    var valor7 = document.getElementById("valor7");
    var valor8 = document.getElementById("valor8");
    var valor9 = document.getElementById("valor9");
    var valor0 = document.getElementById("valor0");
    var soma = document.getElementById("soma");
    var igual = document.getElementById("=");
    var c = document.getElementById("c");
    var v;
    var aux = "";
    var resultado = 0;
    var op;
    var v1;
    //var resultado = document.getElementById("resultado");

    valor1.onclick = function() {

        v = valor1;
        aux += valor1.value;
        parent.document.getElementById("resultado").value = aux;

    }

    valor2.onclick = function() {

        v = valor2;
        aux += valor2.value;
        parent.document.getElementById("resultado").value = aux;
        
    }


    valor3.onclick = function() {

        v = valor3;
        aux += valor3.value;
        parent.document.getElementById("resultado").value = aux;
        
    }


    valor4.onclick = function() {

        v = valor4;
        aux += valor4.value;
        parent.document.getElementById("resultado").value = aux;
        
    }


    valor5.onclick = function() {

        v = valor5;
        aux += valor5.value;
        parent.document.getElementById("resultado").value = aux;
        
    }


    valor6.onclick = function() {

        v = valor6;
        aux += valor6.value;
        parent.document.getElementById("resultado").value = aux;
        
    }


    valor7.onclick = function() {

        v = valor7;
        aux += valor7.value;
        parent.document.getElementById("resultado").value = aux;
        
    }


    valor8.onclick = function() {

        v = valor8;
        aux += valor8.value;
        parent.document.getElementById("resultado").value = aux;
        
    }


    valor9.onclick = function() {

        v = valor9;
        aux += valor9.value;
        parent.document.getElementById("resultado").value = aux;
        
    }

    valor0.onclick = function() {

        v = valor0;
        aux += valor0.value;
        parent.document.getElementById("resultado").value = aux;
        
    }

    soma.onclick = function() {

        op = "soma";
        v1 = v;
        aux += soma.value;
        parent.document.getElementById("resultado").value = aux;
        
    }

    igual.onclick = function() {

         if (op == "soma") {

            resultado = parseFloat(v1.value) + parseFloat(v.value);

            }

        parent.document.getElementById("resultado").value = resultado;
        aux = resultado;
                    
     }

     c.onclick = function() {

        v = "";
        v1 = "";
        resultado = "";
        op = "";
        aux = "";
        parent.document.getElementById("resultado").value = resultado;
                   
    }
}
