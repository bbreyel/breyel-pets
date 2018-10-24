import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import PetService from '../../pets/PetService';

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
          <Navbar.Brand href="/">Breyel Pets</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/all">View All</Nav.Link>
              <NavDropdown title="Pets" id="basic-nav-dropdown">
                {pets.map((pet) => {
                  const path = "/pets/" + pet.id;
                  return (
                    <NavDropdown.Item href={path} key={pet.id}>
                    {pet.name}
                  </NavDropdown.Item>);
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}