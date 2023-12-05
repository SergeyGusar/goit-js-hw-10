import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_LyzBn4AkON27YHKInGHNke5Trs1xauP3kim5FZX1P0h2CoELfz3UiuqKVA6TtW25';

const catUrl = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios
    .get(`${catUrl}/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${catUrl}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export { fetchCatByBreed, fetchBreeds };