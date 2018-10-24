import React from 'react';
import PageTemplate from '../templates/PageTemplate';

export default function(props) {

  const headerText = 'Welcome to Breyel Pets';
  const bodyText = 'This is a hub for all the info on the cuddle buds of the Breyels.' + 
                    ' Select one from the dropdown or click "View All" to see an overview of all of them.';
  return (
    <PageTemplate headerText={headerText}>
      {bodyText}
    </PageTemplate>
  );
}