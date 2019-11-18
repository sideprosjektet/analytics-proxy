const fetchUrl = require('./fetch-url');
const os = require('os');
const fs = require('fs');
const userAgentsLoc = "https://raw.githubusercontent.com/cvandeplas/pystemon/master/user-agents.txt";
function getRandom(arr, n) {
  let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

/**
 *
 * @param number
 * @returns {Promise<string[]>}
 */
module.exports = async function(number) {
  const strings = await fetchUrl(userAgentsLoc);

  return getRandom(strings.split(os.EOL),number);
}
