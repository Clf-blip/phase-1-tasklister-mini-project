document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const input = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    const taskText = input.value.trim(); // Trim whitespace
    if (!taskText) return; // Prevent empty tasks

    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask); // Add task to the list

    input.value = ""; // Clear input after adding
  });
});
