const parseGaCookie = require('./parse-ga-cookie');
const anonymizeUa = require('./anonymize-ua');
const getGaGeoid = require('./get-ga-geoid');
const geoLookup = require('geoip-lite').lookup;

module.exports = async function(params, cookies, uaString, ip) {
  params.aip = "1"; // turn on AIP to avoid strange statistics
  delete params.z; // remove cachebuster... really not needed in this environment.
  delete params.a; // adsense not applicable
  if (cookies._ga) {
    // this allows for cross site tracking assuming that ga-proxy is run on subdomain.
    params.cid = parseGaCookie(cookies._ga);
  }
  if (cookies._gid) {
    params._gid = parseGaCookie(cookies._gid);
  }
  params.ua = anonymizeUa(uaString);
  const geo = geoLookup(ip);
  if(geo){
    // adding geo info if found
    params.geoid = await getGaGeoid(geo.country, geo.city);
  }
  return params;
};
