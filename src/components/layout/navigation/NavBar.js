import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import PetService from '../../pets/PetService';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
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
      <header className="top-nav">
        <Navbar sticky="top" expand="lg" bg="nav" className="center">
          <Link to="/"><Navbar.Brand>Breyel Pets</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/all"><Navbar.Text>View All</Navbar.Text></Link>
              <NavDropdown title="Pets" id="basic-nav-dropdown">
                {pets.map((pet) => {
                  const path = "/pets/" + pet.id;
                  return (
                    <NavDropdown.Item href={path} key={pet.id}>
                      {pet.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}