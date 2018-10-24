import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import PetList from './PetList';

export default function ViewAllPage(props) {
  const headerText = "Viewing All Pets";

  return (
    <PageTemplate headerText={headerText}>
      <PetList />
    </PageTemplate>
  );
}