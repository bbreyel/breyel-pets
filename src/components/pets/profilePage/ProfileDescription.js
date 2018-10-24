import React from 'react';
import BoldText from '../../formatting/BoldText';

export default function ProfileDescription(props) {
  return (
    <div>
      <div>
        <BoldText>Name:</BoldText> {props.pet.name}
      </div>
      <div>
        <BoldText>Age:</BoldText> {props.pet.age}
      </div>
      <div>
        <BoldText>Description:</BoldText> {props.pet.description}
      </div>
    </div>
  )
}