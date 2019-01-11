import React from 'react';

const SWChar = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
          <li>Birth Year: {props.birth_year}</li>
      </ul>
    </div>
  );
};

export default SWChar;