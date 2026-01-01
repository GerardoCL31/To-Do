const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const span = document.createElement("span");
        span.textContent = task.text;

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.classList.add("complete");
        completeBtn.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
        list.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    saveTasks();
    renderTasks();
});

renderTasks();
