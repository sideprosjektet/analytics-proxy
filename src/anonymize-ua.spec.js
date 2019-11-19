const anonymizeUa = require('./anonymize-ua');
const assert = require('assert');
describe('anonymize ua', async () => {
  const params = [
    {
      ua: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.85 Safari/537.36',
      expected: 'Mozilla/redacted (Windows;U;Windows redacted;redacted) Chrome/redacted Blink/redacted',
    },
  ];
  params.forEach(function(param) {
    it('test that string is working', function() {
      const anonymized = anonymizeUa(param.ua);
      assert.equal(anonymized, param.expected);
    });
  });
});
