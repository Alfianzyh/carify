import axios from 'axios';

const API_KEY = 'h8/w6mNrb6Qcn1MPBDOqbw==duoPWkzmely15zIl'; 

export async function fetchCars({ make = '', model = '', year = '' } = {}) {
  const params = {};
  if (make) params.make = make;
  if (model) params.model = model;
  if (year) params.year = year;

  const res = await axios.get('https://api.api-ninjas.com/v1/cars', {
    headers: { 'X-Api-Key': API_KEY },
    params,
  });
  return res.data; // array mobil
}
