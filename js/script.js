const adicionarInput = document.querySelector("#adicionar-input");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const listaGeral = document.querySelector("#tarefas");

const botaoFeito = document.querySelector("#feito");
const editarInput = document.querySelector("#editar");

let listaDeTarefas = []

// Função

function criarTarefa() {
    listaDeTarefas.push({
        tarefa: adicionarInput.value,
        concluida: false
    })


    exibirTarefas()

    adicionarInput.value =''
} 

function exibirTarefas() {
    let novaTarefa = ''

    listaDeTarefas.forEach((item, posicao) => {
        novaTarefa = novaTarefa + `
<div class="d-flex justify-content-between align-itens-center bg-success p-2 text-dark bg-opacity-10 ${item.concluida && "bg-success-subtle fw-bold"}" style="margin-top: 20px; border-radius: 10px;">

    <div>
        <button id="feito" class="btn btn-outline-dark btn-sm ${item.concluida && "btn btn-success"}" onclick="concluirTarefa(${posicao})">
            <i class="fa-solid fa-check"></i>
        </button>

        <span id="texto-tarefa" style="margin-left: 10px; font-size: 14px;">${item.tarefa}</span>
    </div>
    <div>
        <button id="editar" class="btn btn-outline-warning btn-sm onclick="editarTarefa(${posicao})">
            <i class="fa-solid fa-pen"></i>
        </button>

        <button id="excluir" class="btn btn-outline-danger btn-sm" onclick="deletarTarefa(${posicao})">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
</div>

       `
})

    listaGeral.innerHTML = novaTarefa 

    localStorage.setItem('lista', JSON.stringify(listaDeTarefas))
}

function deletarTarefa(posicao) {
   listaDeTarefas.splice(posicao, 1)

    exibirTarefas()
}

function concluirTarefa(posicao) {
    listaDeTarefas[posicao].concluida = !listaDeTarefas[posicao].concluida

    exibirTarefas()
}

function editarTarefa() {

    
}

function atualizarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista')

    if (tarefasLocalStorage) {
    listaDeTarefas = JSON.parse(tarefasLocalStorage)
    }

    exibirTarefas()

}

atualizarTarefas()

// Eventos

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault(); 
    criarTarefa();
});