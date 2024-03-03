document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('addTaskBtn');
    const inputField = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to delete a task item
    function deleteTask(taskItem) {
        taskItem.remove();
    }

    // Function to create a new task item
    function createTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌\n';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', function() {
            deleteTask(taskItem);
        });

        // Append delete button to task item
        taskItem.appendChild(deleteButton);

        // Append task item to task list
        taskList.appendChild(taskItem);
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            inputField.value = '';
        }
    });

    // Event listener for task items to mark them as completed
    taskList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    });
});
