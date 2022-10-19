const listaCriador = document.getElementById("inputLista");
const tarefas = document.getElementById("tarefas");
let tituloValor = document.getElementById('titulo');
let descValor = document.getElementById('desc');
let dataValor = document.getElementById('data');
const adicionarBotao = document.getElementById("adicionador");

titulo.className = "input";
desc.className = "input";
data.className = "input";


adicionarBotao.addEventListener("click", addTarefa);2

listaCriador.style.display = "flex";

let i = 0;

function addTarefa() {
    i += 1;
    let tarefa = document.createElement("div");
    tarefa.className = "azul";
    tarefa.id = i;
    tarefas.appendChild(tarefa);
    let titulo = document.createElement("div");
    let desc = document.createElement("div");
    let data = document.createElement("div");
    titulo.className = "input";
    desc.className = "input descricao";
    data.className = "input";
    titulo.innerHTML = tituloValor.value;
    desc.innerHTML = descValor.value;
    data.innerHTML = dataValor.value;
    tarefa.appendChild(titulo);
    tarefa.appendChild(desc);
    tarefa.appendChild(data);
    tituloValor.value = "";
    descValor.value = "";
    dataValor.value = "";
    tituloText = "Título";
    descText = "Descrição";
    dataText = "Prazo";
    titulo.insertAdjacentText("beforebegin", tituloText);
    desc.insertAdjacentText("beforebegin", descText);
    data.insertAdjacentText("beforebegin", dataText);
    let deletar = document.createElement("button");
    deletar.id = "d" + i;
    deletar.innerHTML = "Deletar tarefa";
    let tarefaCompleta = document.createElement("input");
    tarefaCompleta.setAttribute("type", "checkbox");
    tarefa.appendChild(tarefaCompleta);
    tarefa.appendChild(deletar);
    deletar.addEventListener("click", () => {
      deletarTarefa(deletar.id);
    } );
}

function deletarTarefa(DivDeletar) {
  for (elemento of tarefas.children) {
    if (("d" + elemento.id) === DivDeletar) {
      elemento.remove();
    }
  }
}
