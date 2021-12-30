/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
/* eslint-disable max-lines-per-function */
/* eslint-disable padded-blocks */
window.onload = function pgCarregada() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const criarTarefa = document.getElementById('criar-tarefa');

  function createTask() {
    const textTask = document.getElementById('texto-tarefa').value;
    const newTask = document.createElement('li');
    newTask.innerText = textTask;
    newTask.classList.add('tarefa');
    if (textTask === '') {
      alert('Você não digitou nada hein parça');
    } else {
      listaTarefas.appendChild(newTask);
      document.getElementById('texto-tarefa').value = '';
      // eslint-disable-next-line no-use-before-define
      newTask.addEventListener('click', paint);
      newTask.addEventListener('dblclick', complete)
    }
  }

  criarTarefa.addEventListener('click', createTask);

  function complete(sourceEvent) {
    // "toggle" adiciona a classe ao elemento se ele não a tiver e a remove se ele tiver, por isso não é necessário fazer outra função para remover a classe "completed"
    sourceEvent.target.classList.toggle('completed');
  }

  function paint(sourceEvent) {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }

    sourceEvent.target.classList.add('selected');
  }

  const limpaTudoBtn = document.getElementById('apaga-tudo');

  function clearAll() {
    for (let i = listaTarefas.childNodes.length - 1; i >= 0; i -= 1) {
      listaTarefas.childNodes[i].remove();
    }
  }

  limpaTudoBtn.addEventListener('click', clearAll);

  const limpaCompletBtn = document.getElementById('remover-finalizados');

  function clearCompleted() {
    for (let i = listaTarefas.childNodes.length - 1; i >= 0; i -= 1) {
      const currentElement = listaTarefas.childNodes[i];
      if (currentElement.classList.contains('completed')) {
        currentElement.remove();
      }
    }
  }

  limpaCompletBtn.addEventListener('click', clearCompleted);
};
