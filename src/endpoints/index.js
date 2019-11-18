const fetchMarkdown = require('../fetch-markdown');
const indexHtml = fetchMarkdown('index.md');
module.exports = function(req, reply) {
  console.log(process.env);
  reply.header('Content-Type', 'text/html; charset=utf-8').send(indexHtml.replace('www.google-analytics.com', req.hostname));
};
