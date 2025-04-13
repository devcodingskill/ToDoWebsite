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
        deleteButton.innerHTML = "x";
        li.appendChild(deleteButton);
    }
    inputField.value = ""; // Clear the input field after adding the task
    inputField.focus(); // Set focus back to the input field
}
outputField.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        // Toggle the class of the clicked list item
        e.target.classList.toggle('check');
    }

    // Check if the clicked element is a button
    if (e.target.tagName === 'BUTTON') {
        // Remove the list item when the delete button is clicked
        let li = e.target.parentNode;
        outputField.removeChild(li);
    }
}

);