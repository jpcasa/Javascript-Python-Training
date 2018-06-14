'use strict';

const Task = require('./task');
const Repo = require('./modulesPattern');

// Declare Tasks
let task1 = new Task(Repo.get(1));

let task2 = new Task({name: 'Complete Node.js course'});
let task3 = new Task({name: 'Complete Python course'});
let task4 = new Task({name: 'Complete Go course'});

task1.save();
task2.completedTask();
task3.save();
task4.save();
console.log(task2.completed);
