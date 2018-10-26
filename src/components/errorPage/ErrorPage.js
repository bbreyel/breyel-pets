import React from 'react';
import PageTemplate from '../templates/PageTemplate';
import AnchorButton from '../formatting/AnchorButton';
import {Row, Col} from 'react-bootstrap';

export default function ErrorPage(props) {
  const headerText = 'Oops!';
  const bodyText = 'There aren\'t any pets here! You must have ended up here on accident.';
  const buttonText = 'Take Me Back To Some Pets!';
  const backPath = '/all';
  return (
    <PageTemplate headerText={headerText}>
      <div className="mb-lrg">
        {bodyText}
      </div>
      <Row>
        <Col className="text-center">
          <AnchorButton path={backPath}>
            {buttonText}
          </AnchorButton>
        </Col>
      </Row>
    </PageTemplate>
  );
}