module.exports = async function(req, reply) {
  reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(req.cookies);
};

