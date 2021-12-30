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
      painting();
    }
  }

  criarTarefa.addEventListener('click', createTask);

  function painting() {
    const tasks = document.getElementsByClassName('tarefa');

    function paint(sourceEvent) {
      // eslint-disable-next-line no-param-reassign
      for (let i = 0; i < tasks.length; i += 1) {
        tasks[i].classList.remove('selected');
      }
      sourceEvent.target.classList.add('selected');
    }

    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].addEventListener('click', paint);
    }
  }
  painting();
};
