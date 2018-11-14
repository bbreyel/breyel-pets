import axios from 'axios';

export default class ApiService {
  get(url) {
    let storage = JSON.parse(sessionStorage.getItem(url));
    if (storage) {
      return Promise.resolve(storage);
    }
    return axios.get(url)
      .then(handleSuccess)
      .catch(handleFailure);

    function handleSuccess(response) {
      if (response && response.data) {
        sessionStorage.setItem(url, JSON.stringify(response.data));
        return response.data;
      }
    }
  }
}


function handleFailure(response) {
  return Promise.reject(response);
}