const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
  const task = inputBox.value.trim();
  if (!task) {
    alert('Por favor ingrese una tarea!!!')
    console.log('Esto no es una tarea')
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <label for="check">
      Este es el check
      </label>
      <input id="check" name="check" type="checkbox" />
    <span>${task}</span>
    <button class="edit-btn">Editar</button>
    <button class="delete-btn">Eliminar</button>
  `;

  listContainer.appendChild(li);
}