var geoip = require('geoip-lite');

var ip = "uaString";
var geo = geoip.lookup(ip);

console.log(geo);
