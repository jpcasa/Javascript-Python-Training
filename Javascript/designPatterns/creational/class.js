'use strict';

// Task Class
class Task {
  // Constructor Method
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  // Methods
  completedTask() {
    console.log(`Completing Task: ${this.name}`);
    this.completed = true;
  }
  save() {
    console.log(`Saving Task: ${this.name}`);
  }
}

// Do something Cool...

let task1 = new Task('Complete Javascript course');
let task2 = new Task('Complete Node.js course');

task1.save();
task2.completedTask();
console.log(task2.completed);
