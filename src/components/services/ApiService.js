import axios from 'axios';
import SessionService from './sessionService/SessionService';

export default class ApiService {
  constructor() {
    this.sessionService = new SessionService();
  }

  get(url) {
    let self = this;
    let storage = self.sessionService.getItem(url); 
    if (storage) {
      return Promise.resolve(storage);
    }
    return axios.get(url)
      .then(handleSuccess)
      .catch(handleFailure);

    function handleSuccess(response) {
      if (response && response.data) {
        self.sessionService.setItem(url, response.data);
        return response.data;
      }
    }
  }
}


function handleFailure(response) {
  return Promise.reject(response);
}