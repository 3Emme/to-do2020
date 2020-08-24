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

function Task(task, date, status) {
  this.task = task;
  this.date = date;
  this.status = status;
}