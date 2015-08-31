function returnFileExtension ( filename ) {
  return filename.split('.').pop();
}

module.exports = returnFileExtension;
