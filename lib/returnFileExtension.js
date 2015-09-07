function returnFileExtension ( filename ) {
  return /\./.test( filename ) ? filename.split('.').pop() : null;
}

module.exports = returnFileExtension;
