/*
The NEW keyword
Capitalized Function Name

// BASIC OUTLINE:
function ObjectName(param1, param2){
  this.param1 = param1;
  this.param2 = param2;
  this.toString = () => {
    return `${this.param1} ${this.param2}`;
  }
}
*/

const Repo = require('./modulesPattern');

// Task Constructor
const Task = function(data) {
  this.name = data.name;
  this.completed = false;
}

// Prototype Methods so all of the instances can access them
Task.prototype.completedTask = function () {
  console.log(`Completing Task: ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log(`Saving Task: ${this.name}`);
  Repo.save(this);
};

module.exports = Task;
