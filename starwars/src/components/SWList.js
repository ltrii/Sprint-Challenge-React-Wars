import React from 'react';
import ReactDOM from 'react-dom';

import SWChar from './SWChar';
import SWCharAttr from './SWCharAttr';

const SWList = props => {
  return (
    <div className="thelist">
      {props.starwarsChars.map(swchar => (
        <div class="charunit">
            <div className="charname">
                <SWChar 
                    key={swchar.created}
                    name={swchar.name}
                    birth_year={swchar.birth_year} />
            </div>
            <div className="charattr">
                Mass: <SWCharAttr mass={swchar.mass} />
            </div>
        </div>
      ))}
    </div>
  );
};

export default SWList;