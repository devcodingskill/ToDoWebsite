//alert('test');
const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');
const degug = document.getElementById('debug');

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
        deleteButton.innerHTML = "Delete";
        li.appendChild(deleteButton);
    }
    inputField.value = ""; // Clear the input field after adding the task
    inputField.focus(); // Set focus back to the input field
}