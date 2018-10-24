import PetDataService from './PetDataService';
import find from 'lodash/find';

export default class PetService {
  constructor() {
    this.petDataService = new PetDataService();
  }

  getPetList() {
    return this.petDataService.getPetList()
      .then(handleSuccess)
      .catch(handleError);

    function handleSuccess(response) {
      if (response && response.pets) {
        return response.pets;
      }
      return handleError(response);
    }
  }

  getPetById(id) {
    return this.getPetList()
      .then(handleSuccess);
    
    function handleSuccess(petList) {
      const pet = find(petList, function(pet) {
        return pet.id === id;
      });
      if (pet) {
        return pet;
      }
      return handleError('No Matching Pet');
    }
  }
}

function handleError(response) {
  return Promise.reject(response);
}