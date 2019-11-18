const uaParser = require('ua-parser-js');
const linux = ['Linux redacted'];
const macos = ['Intel Mac OS X redacted'];
const windows = ['Windows', 'U', 'Windows redacted', 'redacted'];
const platformSource = {
  'centos': linux,
  'chromium os': linux,
  'debian': linux,
  'dragonfly': linux,
  'fedora': linux,
  'gentoo': linux,
  'haiku': linux,
  'kubuntu': linux,
  'mac os': macos,
  'mandriva': linux,
  'mint': linux,
  'opensolaris': linux,
  'slackware': linux,
  'solaris': linux,
  'suse': linux,
  'ubuntu': linux,
  'windows': windows,
};
module.exports = function(uaString) {
  const parts = [];
  if (uaString.startsWith('Opera')) {
    parts.push('Opera/redacted');
  } else {
    parts.push('Mozilla/redacted');
  }
  const userAgent = uaParser(uaString);
  let oSystem;
  if (userAgent.os.name) {
    const key = userAgent.os.name.toLowerCase().trim();
    if (platformSource[key]) {
      oSystem = platformSource[key];
    } else {
      oSystem = linux;
    }
  } else {
    oSystem = linux;
  }
  parts.push('(' + oSystem.join(';') + ')');
  if (userAgent.browser.name) {
    parts.push(userAgent.browser.name + '/redacted');
  }
  if (userAgent.engine.name) {
    parts.push(userAgent.engine.name + '/redacted');
  }
  return parts.join(' ');
};
