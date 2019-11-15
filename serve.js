const fastify = require('fastify')({logger: true});
fastify.register(require('fastify-cors'), {origin: '*'});
fastify.register(require('fastify-cookie'));
fastify.get('/', require('./src/endpoints'));
fastify.get('/_health/is-alive', async () => ({is: 'alive'}));
fastify.get('/_health/is-ready', async () => ({is: 'ready'}));
fastify.get('/analytics.js', require('./src/endpoints/analytics-js'));
fastify.get('/plugins/*', require('./src/endpoints/analytics-plugins'));
fastify.get('/collect', require('./src/endpoints/collect'));
fastify.get('/r/collect', require('./src/endpoints/collect'));
fastify.get('/cookies', require('./src/endpoints/cookies'));
fastify.get('/github-markdown.css', require('./src/endpoints/github-markdown-css'));
const start = async () => {
  try {
    const port = process.env.PORT || 4141;
    await fastify.listen(port, '0.0.0.0');
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
