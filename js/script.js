const adicionarInput = document.querySelector("#adicionar-input");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const listaGeral = document.querySelector("#tarefas");

const botaoFeito = document.querySelector("#feito");
const editarInput = document.querySelector("#editar");

const botaoPesquisar = document.querySelector('#bt-pesquisar')

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
<div class="d-flex justify-content-between align-itens-center bg-secondary p-2 text-dark bg-opacity-10 ${item.concluida && "bg-success-subtle fw-bold"}" style="margin-top: 20px; border-radius: 10px; line-height: 16px">

    <div style="margin: auto 0">
        <span id="texto-tarefa-${posicao}" style="font-size: 14px; ">${item.tarefa}</span>
        <input id="input-tarefa-${posicao}" type="text" style="display: none;" class="form-control" value="${item.tarefa}">

    </div>

    <div class="d-flex" style="height: 30px">
        <button id="feito" style="margin-left: 5px" class="btn btn-outline-dark btn-sm ${item.concluida && "btn btn-success"}" onclick="concluirTarefa(${posicao})">
            <i class="fa-solid fa-check"></i>
        </button>
        <button style="margin-left: 5px" class="btn btn-outline-warning btn-sm" onclick="editarTarefa(${posicao})">
            <i class="fa-solid fa-pen"></i>
        </button>

        <button id="excluir" style="margin-left: 5px" class="btn btn-outline-danger btn-sm" onclick="deletarTarefa(${posicao})">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
</div>

       `

    document.getElementById('background-lista').classList.remove('d-none');

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

function atualizarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista')

    if (tarefasLocalStorage) {
    listaDeTarefas = JSON.parse(tarefasLocalStorage)
    }

    exibirTarefas()

}

atualizarTarefas()


function editarTarefa(posicao) {
    const spanTarefa = document.querySelector(`#texto-tarefa-${posicao}`);
    const inputTarefa = document.querySelector(`#input-tarefa-${posicao}`);

    spanTarefa.style.display = "none";
    inputTarefa.style.display = "inline-block";

    spanTarefa.style.marginRight = "10px";
    inputTarefa.style.width = `${spanTarefa.offsetWidth}100px`;
    
    inputTarefa.focus();

    inputTarefa.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const novoTexto = inputTarefa.value;
            if (novoTexto) {
                listaDeTarefas[posicao].tarefa = novoTexto;
                spanTarefa.textContent = novoTexto;
                spanTarefa.style.display = "inline";
                inputTarefa.style.display = "none";
                localStorage.setItem("lista", JSON.stringify(listaDeTarefas));
            }
        }
    });
}

// Eventos

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault(); 
    criarTarefa();
});


