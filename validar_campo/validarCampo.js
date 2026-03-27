function validarCampo() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem');

    if(nome.trim() === '') {
        mensagem.innerText = 'Por favor, preencha o campo do nome.';
    } else {
        mensagem.innerText = 'Obrigado, ' + nome + '!';
    }
}