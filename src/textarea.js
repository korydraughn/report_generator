import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <textarea rows={props.rows} className="form-control" style={{resize: 'none'}} />
    </div>
  );
};