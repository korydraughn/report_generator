import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default props => {
  return (
    <div>
      <Link to="/">&lt;&lt; Go Back</Link>
      <div><pre>{JSON.stringify(props.data, null, 2)}</pre></div>
    </div>
  );
}