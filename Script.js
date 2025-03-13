// Function to Add a Task
function addTask() {
    let taskName = document.getElementById("task-name").value;
    if (taskName.trim() === "") {
        alert("Please enter a task name!");
        return;
    }

    let task = document.createElement("div");
    task.classList.add("task");
    task.textContent = taskName;
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", dragStart);

    document.getElementById("todo").appendChild(task);
    document.getElementById("task-name").value = "";  // Clear input field
}

// Drag and Drop Functions
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let task = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(task));
}

// Add Drag & Drop Event Listeners to Columns
document.querySelectorAll(".column").forEach(column => {
    column.addEventListener("dragover", allowDrop);
    column.addEventListener("drop", drop);
});