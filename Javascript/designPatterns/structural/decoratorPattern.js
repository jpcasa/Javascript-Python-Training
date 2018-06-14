// Task Constructor
const Task = function(name) {
  this.name = name;
  this.completed = false;
}

// Prototype Methods so all of the instances can access them
Task.prototype.completedTask = function () {
  console.log(`Completing Task: ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log(`Saving Task: ${this.name}`);
};

const myTask = new Task('Lgeacy Task');
myTask.completedTask();
myTask.save();

const urgentTask = new Task('Lgeacy Task');
urgentTask.priority = 2;
urgentTask.notify = () => {
  console.log('Notifying');
};
urgentTask.notify();
urgentTask.completedTask();
urgentTask.save();
