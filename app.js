var Nightmare = require('nightmare');
var fs = require('fs');
var chalk = require('chalk');
var inquirer = require('inquirer');
var fileToRead = process.argv[2];
var viewportWidth = 320;
var viewportHeight = 480;
var filePrepend = 'images/' + viewportWidth + 'x' +  viewportHeight + '/';
var nightmare;

console.log("\nScreenshotter started!");
console.log("\nScreenshots will be saved in: ", filePrepend);
console.log('\nReading file', fileToRead);

//read in the file, convert it into an array
var array = fs.readFileSync(fileToRead).toString().split("\n");

//last element of array isn't a link, remove that
array = array.splice(0, array.length - 1);

console.log('\n# of links to read: ', array.length);

for (var i = 0; i < array.length; i++) {

  console.log('\nChecking page: ', array[i]);

  //get the substring after http[s]://
  var filename = array[i].substr(array[i].indexOf('://') + 3);
  //var fallback = array[i].substr(array[i].search(/^https?:\/\/w?w?w?\./));
  console.log(fallback);

  //replace periods in filename with dashes, personal preference
  var sanitizedFilename = styleFilename(filename);

  //prepend the filePrepend variable
  sanitizedFilename = filePrepend + sanitizedFilename;
  //console.log(sanitizedFilename);
  //grabScreenshot(array[i], sanitizedFilename);
}


function grabScreenshot(url, sanitizedFilename) {
  nightmare = new Nightmare();
  nightmare
    .viewport(viewportWidth,viewportHeight)
    .goto(url)
    .screenshot(sanitizedFilename)
    .run(inLoop);

}

function inLoop() {
  //do nothing
}

function styleFilename(filename){
  var sanitizedFilename = '';
  //replace periods in filename with dashes, personal preference
  sanitizedFilename = filename.replace(/[\.\/]/g, '-') + '.png';

  sanitizedFilename = sanitizedFilename.replace(/www-/, '');
  //replace -com with a backslash to organize screenshots by the site origin
  sanitizedFilename = sanitizedFilename.replace(/-com-?/, '/');

  return sanitizedFilename;
}
