let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push(taskText);
  showTasks();
  input.value = "";
}

function showTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function () {
      if (checkbox.checked) {
        span.style.textDecoration = "line-through";
      } else {
        span.style.textDecoration = "none";
      }
    };

    let span = document.createElement("span");
    span.textContent = tasks[i];

    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.onclick = function () {
      deleteTask(i);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delButton);
    taskList.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}
