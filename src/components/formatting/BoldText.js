import React from 'react';

export default function BoldText(props) {
  return (
    <span className="font-weight-bold">
    <u>{props.children}</u>
    </span>
  );
}