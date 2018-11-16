import React from 'react';
import { Link } from 'react-router-dom';

export default function AnchorButton(props) {
  return (
    <Link to={props.path}>
      <button>
        {props.children}
      </button>
    </Link>
  );
}