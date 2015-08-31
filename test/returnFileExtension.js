var test = require('ava');

// change the current working directory so that file refs make sense
process.chdir( __dirname );

var returnFileExtension = require('../lib/returnFileExtension');

test("should expose a returnFileExtension function", function ( t ) {
  t.assert(typeof returnFileExtension === 'function');
  t.end();
});

test("should return CSV if file extension is .csv", function ( t ) {
  t.is( returnFileExtension('blobity.jpg.txt.png.js.csv') , 'csv');
  t.end();
});
