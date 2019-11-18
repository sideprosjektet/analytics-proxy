const anonymizeUa = require('./anonymize-ua');

const getRandomUa = require('./get-random-ua');

const testShit = async () => {
  const testStrings = await getRandomUa(10);
  testStrings.forEach(uaString=>{
    const anonymized = anonymizeUa(uaString);
    console.log(anonymized);
  })

}

testShit()
