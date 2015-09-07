var assert = require('assert');

// change the current working directory so that file refs make sense
process.chdir( __dirname );

var convertCsvToTxt = require('../lib/convertCsvToTxt');
var testLinks = convertCsvToTxt('./testData.csv');
var badLinks = convertCsvToTxt('./testData.xml');

describe('convert CSV to TXT function', function (){
  it("should expose a function", function () {
    assert.equal( typeof convertCsvToTxt, 'function' );
  });

  it('CSV file was converted into an Array', function (){
    assert.equal( testLinks instanceof Array, true );
    assert.equal( testLinks.length, 4 );
  });

  it('the last element from the array is not an empty String', function (){
    assert.notEqual( testLinks[testLinks.length-1], '' );
  });

});
