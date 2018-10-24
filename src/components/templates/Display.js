import React from 'react';

export default function Display(props) {
  let classString = 'display ';
  classString += props.class;
  return (
    <div className={classString}>
      {props.children}
    </div>
  );
}