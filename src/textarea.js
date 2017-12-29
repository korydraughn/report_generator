import React from 'react';
import {SingleElementContainer} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  return (
    <SingleElementContainer>
        <div className="form-group">
          <fieldset>
            <legend>{props.label}</legend>
            <textarea rows={props.rows} className="form-control" style={{resize: 'none'}} />
          </fieldset>
        </div>
    </SingleElementContainer>
  );
};