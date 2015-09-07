var inquirer = require('inquirer');
// check file input type
var returnFileExtension = require('./lib/returnFileExtension.js');
// read file, map to string
var convertCsvToTxt = require('./lib/convertCsvToTxt.js');

var Pageres = require('pageres');
var filesToRead = [];


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
      },
      {
        type: "confirm",
        name: "crop",
        message: "Do you want to crop to each device?"
      }
    ],
    answersCallback
  );

function answersCallback ( answers ) {
  console.log(answers);
  arrayOfLinks = returnFileExtension( answers.fileToRead ) === '.txt' ?
    answers.fileToRead :
    convertCsvToTxt( answers.fileToRead );
  arrayOfLinks.forEach(takeScreenshot);
}

function takeScreenshot ( item ) {
  return new Pageres(
      {
        delay: 3
      }
    )
    .src(item, ['iphone 5s'], {crop: false})
    .dest(__dirname + '/screenshots')
    .run(
      function(err){
        return err ? (console.log(err), err): null;
      }
    );
}
