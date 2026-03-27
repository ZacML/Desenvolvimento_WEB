function alterarConteudo() {
    // Selecionando o elemento pelo ID
    const titulo = document.getElementById("titulo");
    titulo.textContent = 'Titulo Alterado pelo JavaScript';

    // Selecionando o primeiro parágrafo com a classe "paragrafo"
    const primeiroParagrafo = document.querySelector(".paragrafo"); // primeiro parágrafo da classe
    primeiroParagrafo.classList.add("highlight");
    
    // Selecionando todos os parágrafos com a classe "paragrafo"
    const todosParagrafos = document.querySelectorAll(".paragrafo"); // todos os parágrafos da classe
    todosParagrafos.forEach((paragrafo, index) => {
        paragrafo.textContent = `Parágrafo ${index + 1} alterado pelo JavaScript`;
    });

    alert("Alterações realizadas!");
}