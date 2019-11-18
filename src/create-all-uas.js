const userAgentsLoc = "https://raw.githubusercontent.com/cvandeplas/pystemon/master/user-agents.txt";
const fetchUrl = require('./fetch-url');
const os = require('os');
const anonymizeUa = require('./anonymize-ua');

const createSet = async function(){
  const uas = [];
  const strings = await fetchUrl(userAgentsLoc);
  strings.split(os.EOL).forEach(str=>{
    uas.push(anonymizeUa(str));
  })
  let unique = [...new Set(uas)];
  console.log(unique.join(os.EOL));
}

createSet();
