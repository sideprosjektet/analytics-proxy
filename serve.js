const fastify = require('fastify')({logger: true});
fastify.register(require('fastify-cors'), {origin: '*'});
fastify.register(require('fastify-cookie'));
fastify.get('/', require('./src/endpoints'));
fastify.get('/_health/is-alive', async () => ({is: 'alive'}));
fastify.get('/_health/is-ready', async () => ({is: 'ready'}));
fastify.get('/analytics.js', require('./src/endpoints/analytics-js'));
fastify.get('/collect', require('./src/endpoints/collect'));
fastify.get('/cookies', require('./src/endpoints/cookies'));
fastify.get('/style.css', require('./src/endpoints/style-css'));
fastify.get('/j/collect', require('./src/endpoints/collect'));
fastify.get('/plugins/*', require('./src/endpoints/analytics-plugins'));
fastify.get('/r/collect', require('./src/endpoints/collect'));
fastify.post('/collect', require('./src/endpoints/collect'));
fastify.post('/j/collect', require('./src/endpoints/collect'));
fastify.post('/r/collect', require('./src/endpoints/collect'));
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
