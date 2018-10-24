import React from 'react';
import Display from '../../templates/Display';
import Padding from '../../formatting/Padding';

export default function PetDisplay(props) {
  return (
    <div>
      <Display class="pet-display">
        <Padding>
          <h2>
            {props.pet.name}
          </h2>
          <h3>
            {props.pet.type}
          </h3>
        </Padding>
      </Display>
    </div>
  )
}