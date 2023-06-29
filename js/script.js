const adicionarInput = document.querySelector("#adicionar-input");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const listaGeral = document.querySelector("#tarefas");

const botaoFeito = document.querySelector("#feito");
const editarInput = document.querySelector("#editar-form");

let listaDeTarefas = []

// Função

function criarTarefa(){
    listaDeTarefas.push(adicionarInput.value)

    exibirTarefas()

    adicionarInput.value =''
} 

function exibirTarefas() {
    let novaTarefa = ''

    listaDeTarefas.forEach((tarefa) => {
        novaTarefa = novaTarefa + `
<div class="d-flex justify-content-between align-itens-center bg-success p-2 text-dark bg-opacity-10">


    <button id="feito" class="btn btn-outline-success btn-sm">
        <i class="fa-solid fa-check"></i>
    </button>

    <p id="texto-tarefa" style="margin-left: 10px; font-size: 14px;">${tarefa}</p>

    <button id="editar" class="btn btn-outline-warning btn-sm">
        <i class="fa-solid fa-pen"></i>
    </button>

    <button id="excluir" class="btn btn-outline-danger btn-sm">
        <i class="fa-solid fa-xmark"></i>
    </button>

</div>

        `
    })

    listaGeral.innerHTML = novaTarefa 
}

// Eventos

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault(); 
    criarTarefa();
  });
