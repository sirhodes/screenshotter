var assert = require('assert');

// change the current working directory so that file refs make sense
process.chdir( __dirname );

var returnFileExtension = require('../lib/returnFileExtension');
describe('returning the file extension', function(){
  it("should expose a returnFileExtension function", function (){
    assert.equal(typeof returnFileExtension, 'function' );
  });

  it("should return CSV if file extension is .csv", function (){
    assert.equal( returnFileExtension('blobity.jpg.txt.png.js.csv') , 'csv' );
  });

  it("should return null if no extension", function (){
    assert.equal( returnFileExtension('blobity') , null );
  });
});
