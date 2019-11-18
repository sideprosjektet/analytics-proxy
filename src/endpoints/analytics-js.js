const fetchUrl = require('../fetch-url');
const localizedAnalyticsJs = {};
module.exports = async function(req, reply) {
  const hostname = req.hostname;
  try {
    if (!localizedAnalyticsJs[hostname]) {
      const analyticsJs = await fetchUrl('https://www.google-analytics.com/analytics.js');
      localizedAnalyticsJs[hostname] = analyticsJs.replace('www.google-analytics.com', req.hostname);
    }
    reply.header('Content-Type', 'text/javascript; charset=utf-8').send(localizedAnalyticsJs[hostname]);
  } catch (e) {
    reply.code(500).send(e);
  }
};
