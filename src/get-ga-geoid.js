const geotargetsUrl = 'https://developers.google.com/adwords/api/docs/appendix/geo/geotargets-2019-10-09.csv';
const csv = require('csvtojson');
const slugify = require('slugify');
const fetchUrl = require('./fetch-url');

const createKey = (country, city) => {
  const parts = [country];
  if (city && city.length > 0) {
    parts.push(slugify(city));
  }
  const key = parts.join('/');
  return key.toLowerCase();
};

let cachedTranslationTable;
const fetcher = new Promise(async function(resolve) {
  const start = new Date();
  const geotargets = await fetchUrl(geotargetsUrl);
  const jsonArray = await csv().fromString(geotargets);
  const translationTable = {};
  jsonArray.forEach(row => {
    const key = createKey(row['Country Code'], row['Name']);
    translationTable[key] = parseInt(row['Criteria ID']);
  });
  console.info("Done building geo translation table %dms",new Date() - start)
  cachedTranslationTable = translationTable
  resolve(translationTable)
})

const getTranslationTable = async () => {
  if(cachedTranslationTable){
    return cachedTranslationTable;
  }
  return fetcher;
};
module.exports = async function(country, city) {
  const translationTable = await getTranslationTable();
  const lookup = createKey(country, city);
  if (translationTable[lookup]) {
    return translationTable[lookup];
  } else {
    return country;
  }
};
