import axios from 'axios';

export default class ApiService {
  get(url) {
    return axios.get(url)
      .then(handleSuccess)
      .catch(handleFailure);
  }
}

function handleSuccess(response) {
  if (response && response.data) {
    return response.data;
  }
  return handleFailure(response);
}

function handleFailure(response) {
  return Promise.reject(response);
}