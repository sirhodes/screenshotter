var mocha = require('mocha');
var assert = require('assert');

var convertCsvToTxt = require('../lib/convertCsvToTxt');

describe('converting the file from CSV to TXT', function(){

  var testLinks = convertCsvToTxt('./test/testData.csv');
  var badLinks = convertCsvToTxt('./test/testData.xml');

  it('should be of an Object of arrays', function(){
    assert.equal(typeof testLinks, 'object');
  });

  it('should not be an empty Array', function(){
    assert.equal(testLinks.length, 4);
  });

  it('should strip the last element from the array if it is an empty String', function(){
    assert.notEqual(testLinks[testLinks.length-1], '');
  });

  it('shouldn\'t attempt to convert anything but CSV files', function(){
    assert.equal(badLinks, "You didn\'t pass in a file with a .CSV extension");
    assert.equal(typeof badLinks, 'string');
  });


});
