let toDoApp = {
     myTasks : [],
    addTask(task) {
        this.myTasks.push({text: task, completed: false});
        this.renderTasks();
    },
    renderTasks()  {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        this.myTasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            li.onclick = () => this.toggleTasks(index); 
            if( task.completed){
                li.classList.add("completed");
            }
            taskList.appendChild(li);
        });
    },
    toggleTasks(index) {
        this.myTasks[index].completed = !this.myTasks[index].completed;
        this.renderTasks();
    },
    deleteTasks() {
        this.myTasks = this.myTasks.filter( task => !task.completed);
    }
};

document.getElementById("buttonClicked").onclick = () => {
    let input = document.getElementById("task");
    toDoApp.addTask(input.value);
    input.value = "";

};