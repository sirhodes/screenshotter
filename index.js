const Pageres = require('pageres');

module.exports = takeScreenshot;

function takeScreenshot(url, settings) {
  return new Promise((resolve, reject) => {
    settings = settings || {};
    if (!url) {
      return reject('You didn\'t supply a URL!');
    }

    new Pageres({delay: settings.delay || 2})
      .src(url, (settings.devices || ['1024x768']))
      .dest(settings.dest || __dirname)
      .run()
      .then(resolve, reject);
  });
}
