// script.js

document.getElementById("novaTarefa").addEventListener("keyup", function(event) {
    if (event.key === "Enter"){
        adicionarTarefa();
    }
});
function adicionarTarefa() {
    let novaTarefaTexto = document.getElementById("novaTarefa").value.trim();
  
    if (novaTarefaTexto == ""){
        alert("Digite uma tarefa valida");
        
    } else {
      let listaTarefas = document.getElementById("listaTarefas");
  
      let novaTarefa = document.createElement("li");
      novaTarefa.innerHTML = `
        <button onclick="removerTarefa(this)">Remover</button>
        <span>${novaTarefaTexto}</span>
        <button onclick="marcarComoConcluido(this)">Concluído</button>
        
      `;
      
  
      listaTarefas.appendChild(novaTarefa);
  
      document.getElementById("novaTarefa").value = "";
    }
  }
  
  function removerTarefa(botao) {
    let tarefa = botao.parentElement;
    tarefa.remove();
  }
  function marcarComoConcluido(botao) {
    let tarefa = botao.parentNode; // Obtém o elemento pai (li) do botão
    let textoTarefa = tarefa.querySelector('span'); // Obtém o elemento <span> do texto da tarefa
    // Adiciona ou remove a classe "concluido" para alterar o estilo
    tarefa.classList.toggle("concluido");

    // Verifica se a tarefa foi marcada como concluída e ajusta o estilo
    if (tarefa.classList.contains("concluido")) {
        // Riscar a tarefa
        textoTarefa.style.textDecoration = "line-through";
        // Alterar a cor de fundo para verde
        tarefa.style.backgroundColor = "lightgreen";
    } else {
        // Restaura o estilo padrão
        tarefa.style.textDecoration = "none";
        tarefa.style.backgroundColor = "";
    }
}
  
  