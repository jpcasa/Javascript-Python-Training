const fs = require('fs');

function mergeValues(values, content) {
  // Cycle over keys
  for (key in values) {
    // Replace {{keys}} with the value from the values object
    content = content.replace('{{' + key + '}}', values[key]);
  }
  // return merged content
  return content;
}

function view(templateName, values, response) {
  // Read from template files
  let fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: 'utf8'});
  // Insert values into the Content
  fileContents = mergeValues(values, fileContents);
  // Write content to the response
  response.write(fileContents);

}

module.exports.view = view;
