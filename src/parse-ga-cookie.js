module.exports = function(cookie) {
  const parts = cookie.split(".").splice(2,2);
  return parts.join(".");
};
