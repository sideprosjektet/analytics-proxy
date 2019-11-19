const querystring = require('querystring');
const https = require('https');
module.exports = function(params, gaHostname) {
  console.info(params);
  const postData = querystring.stringify(params);
  // An object of options to indicate where to post to
  const postOptions = {
    host: gaHostname,
    path: '/collect',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'User-Agent': 'AnalyticsProxy/1.0 (+https://github.com/sideprosjektet/analytics-proxy)',
    },
  };
  const postRequest = https.request(postOptions, function(res) {
    res.setEncoding('utf8');
  });
  postRequest.write(postData);
  postRequest.end();
  return true;
};
