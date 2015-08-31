var inquirer = require('inquirer');
// var pageres = require('pageres');
var filesToRead = [];

var convertCsvToTxt = require('./lib/convertCsvToTxt.js');

inquirer
  .prompt(
    [
      {
        type : "input",
        name : "fileToRead",
        message : "Please write the relative path to your file: "
      },
      {
        type : "checkbox",
        name : "devicesToGrab",
        message : "Which screen resolutions will you need screenshots of?",
        choices : [
          "iPhone 4/4s (320x480)",
          "iPhone 5/5s (320x568)",
          "iPhone 6    (376x667)",
          "iPhone 6 Plus (414x736)",
          "iPad Portrait (768x1024)",
          "iPad Landscape (1024x768)",
          "MacBook Air 11\" (1336x768)",
          "MacBook Air 13\" (1336x768)",
          "Generic Monitor (1024x720)",
          "Generic Monitor (1440x900)",
        ]
      }
    ],
    answersCallback
  );

function answersCallback ( answers ) {
  console.log(answers);
  filesToRead = returnFileExtension( answers.fileToRead ) === '.txt' ? answers.fileToRead : convertCsvToTxt( answers.fileToRead );
  return filesToRead;
}
