const fs = require('fs');
const path = require('path');
const css = fs.readFileSync(path.resolve(__dirname, '..', '..', 'node_modules/github-markdown-css/github-markdown.css'), 'utf-8');
module.exports = function(req, reply) {
  reply.header('Content-Type', 'text/css; charset=utf-8').send(css);
};
