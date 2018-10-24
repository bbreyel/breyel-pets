import ApiService from '../services/ApiService';

export default class PetDataService {
  constructor() {
    this.apiService = new ApiService();
  }

  getPetList(url) {
    return this.apiService.get('/pets.json');
  }
}