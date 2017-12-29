import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="form-group">
            <fieldset>
              <legend>{props.label}</legend>
              <textarea rows={props.rows} className="form-control" />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};