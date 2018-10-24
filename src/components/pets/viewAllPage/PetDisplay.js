import React from 'react';
import Display from '../../templates/Display';
import Padding from '../../formatting/Padding';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import AnchorButton from '../../formatting/elements/AnchorButton';

export default function PetDisplay(props) {
  const path = '/pets/' + props.pet.id;
  return (
    <div>
      <Display class="pet-display">
        <Padding>
          <Row>
            <Col>
              <h2>
                {props.pet.name}
              </h2>
              <h3>
                {props.pet.type}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <AnchorButton path={path}>
                View Profile
              </AnchorButton>
            </Col>
          </Row>
        </Padding>
      </Display>
    </div>
  )
}
/**
 *           {/* <Row className="justify-content-end">
            <Col xs={8} >
              <button>View Profile</button>
            </Col>
          </Row> 
 */