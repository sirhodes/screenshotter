function convertCsvToTxt ( inputFile ) {

  var fs = require('fs');
  if ( !/.csv$/.test( inputFile ) ) {
    return "You didn't pass in a file with a .CSV extension";
  }
  return fs
    .readFileSync( inputFile )
    .toString()
    .replace('\n', '')
    .split(/\n|\,/)
    .filter(
      function ( item ) {
        return item !== '';
      }
    );

}

module.exports = convertCsvToTxt;
