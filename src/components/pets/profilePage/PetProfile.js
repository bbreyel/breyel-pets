import React from 'react';
import FloatLeft from '../../formatting/FloatLeft';
import MarginRight from '../../formatting/MarginRight';
import Image from 'react-bootstrap/lib/Image';
// import image from '../../../assets/ripley.jpg';
import Display from '../../templates/Display';
import Padding from '../../formatting/Padding';
import ProfileDescription from './ProfileDescription';

export default function PetProfile(props) {
  return (
    <Display class="pet-profile">
      <FloatLeft>
        <MarginRight>
          <Image src={props.pet.imgUrl} alt="Pic of Ripley"  height="200" />
        </MarginRight>
      </FloatLeft>
      <Padding>
        <ProfileDescription pet={props.pet} />
      </Padding>
    </Display>
  );
}