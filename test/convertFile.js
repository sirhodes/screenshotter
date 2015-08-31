var test = require('ava');

// change the current working directory so that file refs make sense
process.chdir( __dirname );

var convertCsvToTxt = require('../lib/convertCsvToTxt');
var testLinks = convertCsvToTxt('./testData.csv');
var badLinks = convertCsvToTxt('./testData.xml');

test("should expose a function", function ( t ) {
  t.assert(typeof convertCsvToTxt === 'function');
  t.end();
});

test('CSV file was converted into an Array', function ( t ) {
  t.plan(2);
  t.assert(testLinks instanceof Array);
  t.is(testLinks.length, 4);
  t.end();
});

test('the last element from the array is not an empty String', function ( t ) {
  t.assert(testLinks[testLinks.length-1] !==  '');
  t.end();
});
