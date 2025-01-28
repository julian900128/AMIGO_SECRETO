// E principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = []; // Array donde se almacenarán los nombres de los amigos

function agregarAmigo() {
    const nombreAmigo = document.getElementById('nombreAmigo').value;

    // Validar la entrada
    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return; // Salir de la función si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    document.getElementById('nombreAmigo').value = '';

    // Mostrar la lista actualizada de amigos
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const lista = document.getElementById('mostrarListaAmigos');
    lista.innerHTML = ''; // Limpiar la lista existente

    // Iterar sobre el arreglo amigos y crear elementos de lista <li> para cada uno
    for (const amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function seleccionarAmigoAleatorio() {
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indiceAleatorio];
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>El amigo secreto es: ${amigoSeleccionado}</li>`;
    }
}
