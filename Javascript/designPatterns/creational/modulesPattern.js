/* MODULE PATTERN

const module = {
  method: function(){...},
  nextMethod: function(){...}
}
*/

// Repo Module Example
const repo = function() {

  const db = {};

  const get = function(id) {
    console.log("Getting task: " + id);
    return {
      name: 'new task from db'
    }
  }

  const save = function(task) {
    console.log("Saving task: " + task.name + " to the DB.");
  }

  return {
    get: get,
    save: save
  }

}

module.exports = repo();
