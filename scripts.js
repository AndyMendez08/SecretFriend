function namesGuardados() {
    let texto = document.getElementById("names").value;
    let resultado = document.getElementById("resultadoNames");

    if (texto.trim() === "") {
        alert("Por favor, ingrese un nombre");  
        
        return;  
    }

    
    // Crear un nuevo elemento de lista <li> para el nombre ingresado
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto;
    
    // Añadir el nuevo elemento a la lista
    resultado.appendChild(nuevoElemento);

    document.getElementById("names").value = "";
}

function seleccionarAleatorio() {
    let lista = document.getElementById("resultadoNames");  
    // Obtener la lista
    let items = lista.getElementsByTagName("li");  
    // Obtener todos los elementos de la lista
    
    if (items.length === 0) {
        alert("La lista está vacía. Por favor, ingresa al menos un nombre.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * items.length);

    // Obtener el nombre aleatorio
    let nombreAleatorio = items[indiceAleatorio].textContent;

    // Mostrar el nombre aleatorio debajo del botón
    document.getElementById("nombreAleatorio").textContent = "Nombre elegido al azar: " + nombreAleatorio;
}

