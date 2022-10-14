const adicionarTarefa = document.getElementById("btnAdicionar");
const listaCriador = document.getElementById("inputLista");
const tarefas = document.getElementById("tarefas");

const adicionarBotao = document.getElementById("adicionador");

adicionarBotao.addEventListener("click", addTarefa)


function prompts() {
  listaCriador.style.display = "flex";
}

function addTarefa() {
    tarefas.innerHTML = `<div class="azul">asdasdsadsadsad</div>`;
}