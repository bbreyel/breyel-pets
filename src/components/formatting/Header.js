import React from 'react';

export default function Header(props) {
  return (
    <h1 className="display-1">{props.text}</h1>
  );
}