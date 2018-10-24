import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import PetProfile from './PetProfile';
import PetService from '../PetService';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: false
    };
    this.setPet = this.setPet.bind(this);
    const id = parseInt(this.props.match.params.id);
    const petService = new PetService();
    petService.getPetById(id)
      .then(this.setPet);
  }

  setPet(response) {
    const pet = response;
    this.setState({
      pet: pet
    });
  }
  
  render() {
    const pet = this.state.pet;
    const headerText = pet.name + '\'s Profile';
    if (pet) {
      return (
        <PageTemplate headerText={headerText}>
          <div>
            <PetProfile pet={pet} />  
          </div>
        </PageTemplate>
      );
    }
    return(
      <span></span>
    ); 
  }
}