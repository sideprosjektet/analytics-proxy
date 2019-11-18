const fs = require('fs');
const path = require('path');
const css1 = fs.readFileSync(path.resolve(__dirname, '..', '..', 'node_modules/github-markdown-css/github-markdown.css'), 'utf-8');
const css2 = fs.readFileSync(path.resolve(__dirname, '..', '..', 'node_modules/highlight.js/styles/github.css'), 'utf-8');
module.exports = function(req, reply) {
  reply.header('Content-Type', 'text/css; charset=utf-8').send(css1 + css2);
};
