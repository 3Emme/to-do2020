//Business Logic for Notebook

function Notebook(name) {
  this.name = name;
  this.tasks = [];
  this.currentId = 0;
}

Notebook.prototype.addTask = function (task) {
  task.id = this.assignID();
  this.tasks.push(task);
}

Notebook.prototype.assignID = function () {
  this.currentId += 1;
  return this.currentId;
}

Notebook.prototype.findTask = function(id) {
  for(let i=0; i<this.contacts.length; i++ ) {
    if(this.tasks[i]) {
      if(this.tasks[i].id == id ) {
        return this.tasks[i];
      }
    }
  };
  return false;
}


Notebook.prototype.deleteTask = function(id){
  for (let i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    };
    return false;
}

//Business Logic for Tasks

function Task(taskName, date) {
  this.taskName = taskName;
  this.date = date;
  this.status = "Incomplete";
}

Task.prototype.updateTask() = function(newTask) {
  this.task = newTask;
}

Task.prototype.changeTaskStatus() = function() {
  this.status = "Complete";
}


// User Interface Logic
$(document).ready(function() {  
  $("form#taskListForm").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let notebook = new Notebook(name);
    $("#notebootName").text(name);
    $("#addTaskButton").show();
  });

  $("#addTaskButton").click(function(event) {
    event.preventDefault();
    let taskName = $("#task").val();
    let date = $("#date").val();
    let newTask = Task(taskName, date);
  });
});