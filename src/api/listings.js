import axios from 'axios';

const API_KEY = 'ZrQEPSkKYWxmaWFuenloQGdtYWlsLmNvbQ=='; // Ganti dengan API key kamu

export async function fetchListings(limit = 15) {
  const response = await axios.get('https://auto.dev/api/listings', {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      perPage: limit,
    },
  });

  return response.data.records; // List of car data
}
