const parseGaCookie = require("./src/parse-ga-cookie");
const forwardToGa = require('./src/forward-to-ga');
//console.log(parseGaCookie("GA1.1.309865550.1573849989"))
forwardToGa({
  'v': '1',
  '_v': 'j79',
  'a': '1775726465',
  't': 'pageview',
  '_s': '1',
  'dl': 'http://localhost/',
  'ul': 'en-us',
  'de': 'UTF-8',
  'sd': '24-bit',
  'sr': '1680x1050',
  'vp': '1122x509',
  'je': '0',
  '_u': 'SCCAAEIp~',
  'jid': '',
  'gjid': '',
  'cid': '309865550.1573849989',
  'tid': 'UA-2631702-1',
  '_gid': '1831049813.1573849989',
  'aip': 1,
});
