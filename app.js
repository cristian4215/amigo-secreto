
let amigos = [];


function agregarAmigo() {
    
    const nombre = document.getElementById('amigo').value.trim();
    
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }
    
    amigos.push(nombre);
    
    document.getElementById('amigo').value = '';
    
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigo}`;
    resultado.appendChild(li);
}