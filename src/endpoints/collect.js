const fixParams = require('../fix-params');
const sendToGa = require('../send-to-ga');
const isBot = require('isbot');
const TRANSPARENT_GIF_BUFFER = Buffer.from('R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=', 'base64');
module.exports = async function(req, reply) {
  const uaString = req.headers["user-agent"];
  const params = await fixParams(req.query, req.cookies, uaString, req.ip);
  if (process.env.CID_DIMENSION) {
    const customDimension = 'cd' + process.env.CID_DIMENSION;
    params[customDimension] = params.cid;
  }
  if(!isBot(uaString)){
    await sendToGa(params);
  }
  reply.code(200).header('Content-Type', 'image/gif').send(TRANSPARENT_GIF_BUFFER);
};

