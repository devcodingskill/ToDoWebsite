# To-Do Website

This is a simple To-Do List web application that allows users to add, mark, and delete tasks. The tasks are saved in the browser's local storage, so they persist even after the page is refreshed.

## Features
- Add new tasks to the list.
- Mark tasks as completed by clicking on them.
- Delete tasks using the delete button.
- Tasks are saved in local storage for persistence.

## Project Structure
## How It Works
1. **Adding a Task**:
   - Enter a task in the input field and click the "Add" button.
   - The task is added to the list and saved in local storage.

2. **Marking a Task as Completed**:
   - Click on a task to toggle its completion status. Completed tasks are styled with a line-through effect.

3. **Deleting a Task**:
   - Click the "x" button next to a task to remove it from the list. The change is also saved in local storage.

4. **Local Storage**:
   - Tasks are saved in the browser's local storage whenever they are added, marked, or deleted.
   - On page load, tasks are loaded from local storage.

## Files
### `index.html`
The main HTML file that contains the structure of the To-Do List application.

### `style.css`
The stylesheet that defines the appearance of the application, including:
- Styling for the task list.
- Hover effects for tasks.
- Button styles for adding and deleting tasks.

### `script.js`
The JavaScript file that handles the functionality of the application, including:
- Adding tasks.
- Marking tasks as completed.
- Deleting tasks.
- Saving and loading tasks from local storage.

## How to Run
1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Start adding tasks to your To-Do List!

## Requirements
- A modern web browser with JavaScript enabled.

## Future Improvements
- Add the ability to edit tasks.
- Implement categories or priorities for tasks.
- Add animations for adding and removing tasks.
- Improve accessibility for screen readers.

## License
This project is open-source and available under the MIT License.