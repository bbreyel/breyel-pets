import React from 'react';
import PetDisplay from './PetDisplay';
import PetService from '../PetService';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class PetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
    this.setPets = this.setPets.bind(this);
    const petService = new PetService();
    petService.getPetList()
      .then(this.setPets);
  }

  setPets(response) {
    const pets = response;
    this.setState({
      pets: pets
    });
  }

  render() {
    const pets = this.state.pets;

    return(
      <Row>
        {pets.map((pet, index) =>
          <Col xs={12} sm={6} md={3} key={pet.id}>
            <PetDisplay pet={pet} />
          </Col>
        )}
      </Row>
    );
  }
}