function convertCsvToTxt ( inputFile ) {

  var fs = require('fs');

  return !/.csv$/.test( inputFile ) ?
    new Error("You didn't pass in a file with a .CSV extension") :
    fs
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
