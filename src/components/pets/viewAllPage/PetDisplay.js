import React from 'react';
import Display from '../../templates/Display';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import AnchorButton from '../../formatting/AnchorButton';

export default function PetDisplay(props) {
  const path = '/pets/' + props.pet.id;
  return (
    <div>
      <Display class="pet-display">
        <div className="pad-med">
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
        </div>
      </Display>
    </div>
  )
}
