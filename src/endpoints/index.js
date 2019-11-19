const fetchMarkdown = require('../fetch-markdown');
const indexHtml = fetchMarkdown('index.md');
module.exports = function(req, reply) {
  reply.header('Content-Type', 'text/html; charset=utf-8').send(indexHtml.replace('www.google-analytics.com', req.hostname));
};
