const fs = require('fs');
const strings = fs.readFileSync(__dirname + '/useragents.txt', 'utf-8');
const sendToGa = require('./src/send-to-ga');
const os = require('os');
const uuidv4 = require('uuid/v4');
const params = {
  v: '1',
  _v: 'j79',
  t: 'pageview',
  _s: '1',
  dl: 'http://localhost/',
  ul: 'en-us',
  de: 'UTF-8',
  sd: '24-bit',
  sr: '1680x1050',
  vp: '1183x419',
  je: '0',
  _u: 'aGBAAEIp~',
  cid: '1219763399.1573955545',
  tid: 'UA-2631702-1',
  _gid: '1666757895.1573955545',
  _r: '1',
  aip: '1',
  ua: 'Mozilla/redacted (Intel Mac OS X) Chrome/redacted Blink/redacted',
};
const doIt = async function() {
  strings.split(os.EOL).forEach(ua => {
    params.ua = ua;
    params.cd3 = ua;
    params.cid = uuidv4();
    params._gid = uuidv4();

    if(ua.length>0){
      console.log(params);
      sendToGa(params);
    }
  });
};

doIt();
