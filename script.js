//alert('test');
const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');
const degug = document.getElementById('debug');

loadTasks();// Load tasks from local storage on page load

function addTask() {
    if (inputField.value === "") {
        alert("You must add the task");
    } else {
        // Create a new list item and add it to the output field       
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        outputField.appendChild(li);
        // Create a delete button for the new list item
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "x";
        li.appendChild(deleteButton);
        saveTasks(); // Save tasks to local storage
    }
    inputField.value = ""; // Clear the input field after adding the task
    inputField.focus(); // Set focus back to the input field
}
outputField.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        // Toggle the class of the clicked list item
        e.target.classList.toggle('check');
        saveTasks(); // Save tasks to local storage
    }
    // Check if the clicked element is a button
    if (e.target.tagName === 'BUTTON') {
        // Remove the list item when the delete button is clicked
        let li = e.target.parentNode;
        outputField.removeChild(li);
        saveTasks(); // Save tasks to local storage
    }
}, false);

function saveTasks() {
    const tasks = outputField.innerHTML;
    localStorage.setItem('tasks', tasks);
    //alert("Tasks saved successfully!");
}
function loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        outputField.innerHTML = tasks;
    } 
    //  else {
    //     alert("No tasks found in local storage.");
    // }
}
