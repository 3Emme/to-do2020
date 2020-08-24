//Business Logic for Notebook

function Notebook() {
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

//Business Logic for Tasks

function Task(task, date, status) {
  this.task = task;
  this.date = date;
  this.status = status;
}