const taskInput = document.getElementById('taskInput');
const addTaskButton =  document.getElementById('addTaskButton');
const taskList =  document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const task = taskInput.value;

    if (task) {
        const newTask = document.createElement('li');
        newTask.innerHTML = `${task} <button class="removeTask">Remove</button>`;
        taskList.appendChild(newTask);

        newTask.querySelector('.removeTask').addEventListener('click', () => {
            newTask.remove();
        });

        taskInput.value = '';
    };
});