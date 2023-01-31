var x = document.getElementById("miboton");

x.addEventListener("click", ocultarContenido); 

function ocultarContenido(){
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.getElementById("lista4").style.display = "none";
    document.getElementById("lista5").style.display = "none";
    document.getElementById("miboton").style.display = "none";
    document.getElementById("miboton2").style.display = "inline"
    
}
 /* Lo que se ve arriba, son las funciones que van a cumplir el boton
 que esta inline.
    Lo que esta por debajo del comentario, son las funciones del boton
    que esta oculto.
 */
var y = document.getElementById("miboton2")

y.addEventListener("click", mostrar);

function mostrar() {
    document.getElementById("lista1").style.display = "";
    document.getElementById("lista2").style.display = "";
    document.getElementById("lista3").style.display = "";
    document.getElementById("lista4").style.display = "";
    document.getElementById("lista5").style.display = "";
    document.getElementById("miboton2").style.display = "none";
    document.getElementById("miboton").style.display = "inline"
}
