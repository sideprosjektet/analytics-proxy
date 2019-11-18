const getGaGeoid = require('./get-ga-geoid');

const testSet = [
  {
    country: 'NO',
    city: 'Oslo',
  }, {
    country: 'GB',
    city: 'London',
  }, {
    country: 'FR',
    city: '',
  }, {
    country: 'NO',
    city: 'Trondheim',
  }

  ].forEach( async set => {
  const res = await getGaGeoid(set.country, set.city)
  console.log(res);
});

