function minhaFuncaoKeydown(event) {
    const mensagem = document.getElementById('mensagem');

    if(event.key === 'Enter') {
        mensagem.innerText = "CONFIRMADO!";
    } else if (event.key === 'Escape') {
        mensagem.innerText = "CANCELADO";
    } else {
        mensagem.innerText = 'Tecla "' + event.key + '" precionada!';
    }
}