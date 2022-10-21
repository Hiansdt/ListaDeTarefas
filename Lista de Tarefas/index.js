const listaCriador = document.getElementById("inputLista");
const tarefas = document.getElementById("tarefas");
let tituloValor = document.getElementById("titulo");
let descValor = document.getElementById("desc");
let dataValor = document.getElementById("data");
let prioridadeValor = document.getElementById("prioridade");
const adicionarBotao = document.getElementById("adicionador");
let prioridadeDiv1 = document.querySelector(".prioridade1");
let prioridadeDiv2 = document.querySelector(".prioridade2");
let prioridadeDiv3 = document.querySelector(".prioridade3");
let add = document.querySelector(".add");
let editTar = document.querySelector("#editarTarefa");
add.addEventListener("click", FunctionAdd);

function FunctionAdd(){
  listaCriador.style.display = "flex";
}

adicionarBotao.addEventListener("click", addTarefa);

let i = 0;

function addTarefa() {
  i += 1;
  let tarefa = document.createElement("div");
  tarefa.className = "azul";
  tarefa.id = i;

  let titulo = document.createElement("div");
  let desc = document.createElement("div");
  let data = document.createElement("div");
  let prioridade = document.createElement("div");

  titulo.className = "input";
  desc.className = "input descricao";
  data.className = "input";
  prioridade.style.border = "1px solid white";

  titulo.innerHTML = tituloValor.value;
  desc.innerHTML = descValor.value;
  data.innerHTML = dataValor.value;
  prioridade.innerHTML = "Prioridade: " + prioridadeValor.value;

  tarefa.appendChild(titulo);
  tarefa.appendChild(desc);
  tarefa.appendChild(data);
  tarefa.appendChild(prioridade);

  tituloValor.value = "";
  descValor.value = "";
  dataValor.value = "";

  titulo.insertAdjacentText("beforebegin", "Título");
  desc.insertAdjacentText("beforebegin", "Descrição");
  data.insertAdjacentText("beforebegin", "Prazo");

  let deletar = document.createElement("button");
  deletar.id = "d" + i;
  deletar.innerHTML = "Deletar tarefa";

  let tarefaCompleta = document.createElement("input");

  tarefaCompleta.setAttribute("type", "checkbox");
  tarefaCompleta.className = "tarefaComp";
  tarefa.appendChild(tarefaCompleta);
  tarefa.appendChild(deletar);

  deletar.addEventListener("click", () => {
    deletarTarefa(deletar.id);
  });

  if (prioridadeValor.value == 1) {
    tarefas.appendChild(tarefa);
    tarefa.classList.add("pr1");
  }

  let prel = document.querySelector(".pr1");

  if (prioridadeValor.value == 2) {
    tarefas.insertBefore(tarefa, prel);
  } else if (prioridadeValor.value == 3) {
    tarefas.insertBefore(tarefa, tarefas.firstChild);
  }
  
  let editarTarefa = document.createElement("button");
  tarefa.appendChild(editarTarefa);
  editarTarefa.innerHTML = "Editar Tarefa"
  editarTarefa.id = "edit" + i
  editarTarefa.addEventListener("click", editMostrar);

  listaCriador.style.display = "none";
}

function deletarTarefa(DivDeletar) {
  for (elemento of tarefas.children) {
    if ("d" + elemento.id === DivDeletar) {
      elemento.remove();
    }
  }
}

function editMostrar() {
  editarTarefa.style.display = "flex";
}