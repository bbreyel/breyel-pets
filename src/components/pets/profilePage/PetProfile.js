import React from 'react';
import FloatLeft from '../../formatting/FloatLeft';
import MarginRight from '../../formatting/MarginRight';
import Image from 'react-bootstrap/lib/Image';
// import image from '../../../assets/ripley.jpg';
import Display from '../../templates/Display';
import Padding from '../../formatting/Padding';
import ProfileDescription from './ProfileDescription';
import AnchorButton from '../../formatting/elements/AnchorButton';

export default function PetProfile(props) {
  return (
    <Display class="pet-profile">
      <FloatLeft>
        <MarginRight>
          <Image src={props.pet.imgUrl} alt="Pic of Ripley"  height="300px" />
        </MarginRight>
      </FloatLeft>
      <Padding>
        <div className="mb-med">
          <AnchorButton path="/all">Back</AnchorButton>
        </div>
        <ProfileDescription pet={props.pet} />
      </Padding>
    </Display>
  );
}