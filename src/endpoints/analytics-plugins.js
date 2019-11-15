const fetchUrl = require('../fetch-url');
const loadedFile = {};
module.exports = async function(req, reply) {
  const url = "https://www.google-analytics.com" + req.raw.url
  if (!loadedFile[url]) {
    loadedFile[url] = await fetchUrl(url);
  }
  reply.header('Content-Type', 'text/plain; charset=utf-8').send(loadedFile[url]);
};
