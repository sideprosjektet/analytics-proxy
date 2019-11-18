const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

let cached = {};
/**
 *
 * @param url
 * @returns {Promise<String>}
 */
module.exports = function(url) {
  const filename = crypto.createHash('md5').update(url).digest('hex');
  const cachedPath = path.resolve(__dirname, '..', 'cache', filename);
  return new Promise(function(resolve) {
    if (!fs.existsSync(cachedPath)) {
      const file = fs.createWriteStream(cachedPath);
      https.get(url, response => {
        const stream = response.pipe(file);
        stream.on('finish', function() {
          console.info('Done downloading ' + url);
          stream.close();
          cached[filename] = fs.readFileSync(cachedPath, 'utf-8');
          resolve(cached[filename]);
        });
      });
    } else {
      if (!cached[filename]) {
        cached[filename] = fs.readFileSync(cachedPath, 'utf-8');
      }
      resolve(cached[filename]);
    }
  });
};
