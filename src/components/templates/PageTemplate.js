import React from 'react';
import Header from '../formatting/Header';
import Container from 'react-bootstrap/lib/Container';

export default function PageTemplate(props) {
  return (
    <Container>
      <Header text={props.headerText} />
      <hr/>
      <div>
        {props.children}
      </div>
    </Container>
  );
}