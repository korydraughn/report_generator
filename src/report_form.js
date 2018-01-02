import React from 'react';
import {Link} from 'react-router-dom';
import StudentInfo from './student_info';
import Notes from './notes';
import Testing from './testing';
import {SingleElementContainer} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const {data} = props;
  const {start_date, end_date} = data.tests;
  const {student, notes, tests} = props.handlers;

  return (
    <div>
      <StudentInfo data={{...data.student, start_date, end_date}} {...student} />
      <br />

      <Notes data={data.notes} {...notes} />
      <br />

      <Testing data={data.tests.data} {...tests} />

      <SingleElementContainer>
          <button type="button" className="btn btn-lg btn-primary float-right">
            <Link to="/report">Generate Report</Link>
          </button>
      </SingleElementContainer>
    </div>
  );
};