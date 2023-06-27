const adicionar = document.querySelector("#adicionar");
const adicionarInput = document.querySelector("#adicionar-input");
const listaGeral = document.querySelector("#tarefas");
const botaoFeito = document.querySelector("#feito");
const editarInput = document.querySelector("#editar-form");

// Função


const salvar = (text)  => {
    document.getElementById('tarefas').classList.remove('d-flex');

    const lista = document.createElement("div");
    lista.classList.add("d-flex");

    const botaoFeito = document.createElement("button");
    botaoFeito.innerHTML = '<i class="fa-solid fa-check"></i>';
    lista.appendChild(botaoFeito);

    const texto = document.createElement("h2");
    texto.innerText = text;
    lista.appendChild(texto);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("btn-outline-warning");
    botaoEditar.innerHTML = '<i class="fa-solid fa-pen"></i>';
    lista.appendChild(botaoEditar);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("btn-outline-danger");
    botaoExcluir.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    lista.appendChild(botaoExcluir);

    listaGeral.appendChild(lista);
};

// Eventos

adicionar.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorInput = adicionarInput.value;

    if (valorInput) {
        salvar(valorInput);
    }
});