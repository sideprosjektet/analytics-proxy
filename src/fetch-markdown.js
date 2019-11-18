const hljs = require('highlight.js');
const fs = require('fs');
const path = require('path');
const template = require('./template');
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

module.exports = function(filename) {
  const indexMd = fs.readFileSync(path.resolve(__dirname, '..', 'help', filename), 'utf-8');
  const body = markdown.render(indexMd);
  const html = template(body);
  return html
}
