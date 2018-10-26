import React from 'react';

export default function AnchorButton(props) {
  return (
    <a href={props.path}>
      <button>
        {props.children}
      </button>
    </a>
  );
}