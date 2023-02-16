const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');

button.onclick = (evt) => {
    addNewTask(evt);
}

input.addEventListener('keydown', (evt) => {
    if(evt.key === 'Enter'){
        addNewTask(evt);
    }   
})

function addNewTask(evt){
    evt.preventDefault();
    if(input.value === ''){
        alert('Строка ввода не должна быть пустой')
    } else {
        tasksList.innerHTML += `
            <div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
        const deleteTask =  Array.from(document.querySelectorAll('.task__remove'));
        input.value = '';
        newArrayToDelete(deleteTask);
    }
}

function newArrayToDelete (array){
    array.forEach(item => item.onclick = (evt) => {
        evt.preventDefault();
        let elementToDelete = item.parentElement.parentElement;
        elementToDelete.removeChild(item.parentElement);
    })
}
