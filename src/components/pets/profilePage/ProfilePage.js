import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import PetProfile from './PetProfile';
import PetService from '../PetService';
import Redirect from 'react-router-dom/Redirect';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: false,
      error: false
    };
    this.setPet = this.setPet.bind(this);
    this.goToError = this.goToError.bind(this);
    const id = parseInt(this.props.match.params.id);
    const petService = new PetService();
    petService.getPetById(id)
      .then(this.setPet)
      .catch(this.goToError);
  }

  setPet(response) {
    const pet = response;
    this.setState({
      pet: pet
    });
  }

  goToError() {
    this.setState({
      error: true
    });
  }
  
  render() {
    const pet = this.state.pet;
    const error = this.state.error;
    const headerText = pet.name + '\'s Profile';
    if (pet && !error) {
      return (
        <PageTemplate headerText={headerText}>
          <div>
            <PetProfile pet={pet} />  
          </div>
        </PageTemplate>
      );
    } else if (error) {
      return (
          <Redirect 
            to={{
              pathname: '/error'
            }}
          />
      );
    }
    return(
      <span></span>
    ); 
  }
}