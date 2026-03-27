function adicionarItem() {
const lista = document.getElementById("lista");
const input = document.getElementById("novoItem");

if (input.value.trim() === "") {
return;
}

const novoLi = document.createElement("li");
const textoLi = document. createTextNode(input. value);
const botaoRemover = document.createElement ("button");
botaoRemover.textContent = "Remover";
botaoRemover. addEventListener("click", function () { +
novoLi. remove();
});


novoLi.appendChild(textoLi);
novoLi.appendChild(botaoRemover);
lista.appendChild(novoLi);
input.value = "";
}