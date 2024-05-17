const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    const task = inputBox.value.trim();
    if (!task){
        alert('Por favor ingreseuna tarea!!')
        console.log('Esto no es una tarea')
    
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
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        </div>
    </div>
    `;
    listContainer.appendChild(li);
}