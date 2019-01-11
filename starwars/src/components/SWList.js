import React from 'react';
import ReactDOM from 'react-dom';

import SWChar from './SWChar';
import SWCharAttr from './SWCharAttr';

const SWList = props => {
  return (
    <div>
      {props.starwarsChars.map(swchar => (
        <div class="charunit">
            <div className="charname">
                <SWChar 
                    key={swchar.created}
                    name={swchar.name} />
            </div>
            <div className="charattr">
                <SWCharAttr />
            </div>
        </div>
      ))}
    </div>
  );
};

export default SWList;