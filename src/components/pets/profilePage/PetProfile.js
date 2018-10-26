import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import Display from '../../templates/Display';
import ProfileDescription from './ProfileDescription';
import AnchorButton from '../../formatting/AnchorButton';

export default function PetProfile(props) {
  const path = '/all';
  return (
    <Display class="pet-profile">
      <div className="float-left mr-med">
        <Image src={props.pet.imgUrl} alt="Pic of Ripley"  height="300px" />
      </div>
      <div className="mb-med pad-med">
        <AnchorButton path={path}>Back</AnchorButton>
      </div>
      <ProfileDescription pet={props.pet} />
    </Display>
  );
}