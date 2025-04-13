//alert('test');
const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');
const degug = document.getElementById('debug');

function addTask() {
    if (inputField.value === "") {
        alert("You must add the task");
    } else {
        // degug.innerHTML =inputField.value;
        let li = document.createElement('li');
        // console.log("test");
        li.innerHTML = inputField.value;
        outputField.appendChild(li);
    }
}