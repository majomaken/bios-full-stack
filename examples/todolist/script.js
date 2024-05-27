const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const completedCounter = document.getElementById('completed-counter');
const uncompletedCounter = document.getElementById('uncompleted-counter');

// function updateCounters() {}

// const updateCounters = function() {}

const updateCounters = () => {
  const completedTasks = document.querySelectorAll('input[type="checkbox"]:checked').length;
  
  const uncompletedTasks = document.querySelectorAll('li:not(.completed)').length;

  completedCounter.textContent = completedTasks
  uncompletedCounter.textContent = uncompletedTasks

}

const addTask = () => {
    const task = inputBox.value.trim();
    if (!task){
        alert('Por favor ingrese una tarea!!')

    return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="tasks-container">
        <label>
            <input type="checkbox" />
            <span>${task}</span>
        </label>
        <div class="buttons-container">
            <button class="buttons edit-btn">Editar</button>
            <button class="buttons delete-btn">Eliminar</button>
        </div>
    </div>
    `;

    listContainer.appendChild(li);

    inputBox.value = '';

    const checkbox = li.querySelector('input[type="checkbox"]')
    const editBtn = li.querySelector('.edit-btn')
    const taskSpan = li.querySelector('span')
    const deleteBtn = li.querySelector('.delete-btn')

    checkbox.addEventListener('click', function () {
      li.classList.toggle('completed', checkbox.checked);
      updateCounters();
    })

    editBtn.addEventListener('click', function () {
      const update = prompt('Actualiza la tarea', taskSpan.textContent)
      taskSpan.textContent = update;
      li.classList.remove('completed');
      checkbox.checked = false;
      updateCounters();
    })

    deleteBtn.addEventListener('click', function () {
      if (confirm('¿Estás seguro de eliminar la tarea?'))
        li.remove();
        updateCounters();
    })

  updateCounters();
}