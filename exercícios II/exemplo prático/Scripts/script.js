function addTask() {
    const taskTitle = document.querySelector("task-title").value;

    if(taskTitle) {
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        newTask.querySelector(".task-title").textContent = taskTitle;

        newTask.classlist.remove("template");

        newTask.classlist.remove("hide");

        const list = document.querySelector("task-list");
        list.appendChild(newTask);

        document.querySelector("task-title").value = "";
    }
}

const addbtn = document.querySelector("add-btn");

    document.addEventListener("click", function(e) {
        e.preventDefault();

        addTask();

    })