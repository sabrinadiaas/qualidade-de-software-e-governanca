function sanitize(text) {
  const temp = document.createElement("div");
  temp.textContent = text;
  return temp.innerHTML;
}

function addTask() {
  const input = document.getElementById("task");
  const taskText = input.value.trim();

  if (!taskText) return;

  const taskElement = document.createElement("li");
  taskElement.textContent = sanitize(taskText);

  taskElement.addEventListener("click", () => toggleDone(taskElement));

  document.getElementById("list").appendChild(taskElement);
  input.value = "";
}

function toggleDone(taskElement) {
  taskElement.classList.toggle("done");
}

function deleteTask(taskElement) {
  if (!taskElement) return;
  taskElement.remove();
}
