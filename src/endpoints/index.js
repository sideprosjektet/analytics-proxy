// default mode
const hljs = require('highlight.js');
const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});
const fs = require('fs');
const path = require('path');
const template = require('../template');
const indexMd = fs.readFileSync(path.resolve(__dirname, '..', '..', 'help', 'index.md'), 'utf-8');
const body = markdown.render(indexMd);
const html = template(body);
module.exports = function(req, reply) {

  reply.header('Content-Type', 'text/html; charset=utf-8').send(html.replace('www.google-analytics.com', req.hostname));
};
