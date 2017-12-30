import React from 'react';
import StudentInfo from './student_info';
import Notes from './notes';
import TestList from './test_list';
import {SingleElementContainer} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const {student} = props.event_handlers;

  return (
    <div>
      <StudentInfo {...student} />
      <br />

      <Notes />
      <br />

      <TestList />

      <SingleElementContainer>
          <button type="button" className="btn btn-lg btn-primary float-right">
            Generate Report
          </button>
      </SingleElementContainer>
    </div>
  );
};