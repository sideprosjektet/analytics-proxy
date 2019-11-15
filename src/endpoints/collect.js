const parseGaCookie = require('../parse-ga-cookie');
module.exports = async function(req, reply) {
  const params = req.query;
  params.aip = 1; // turn on AIP to avoid strange statistics
  delete params.z; // remove cachebuster... really not needed in this environment.
  if (req.cookies._ga) {
    // this allows for cross site tracking assuming that ga-proxy is run on subdomain.
    params.cid = parseGaCookie(req.cookies._ga);
  }
  if (req.cookies._gid) {
    params._gid = parseGaCookie(req.cookies._gid);
  }
  reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(params);
};

