const fetchUrl = require('../fetch-url');
const prefetch = async  () => {
  await fetchUrl('https://www.google-analytics.com/analytics.js');
  await fetchUrl('https://www.google-analytics.com/plugins/ua/linkid.js');
  await fetchUrl('https://www.google-analytics.com/plugins/ua/ec.js');
}

prefetch();
