import React from 'react';
import ReactDOM from 'react-dom';

import SWChar from './SWChar';

const SWList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <SWChar />
      ))}
    </div>
  );
};

export default SWList;