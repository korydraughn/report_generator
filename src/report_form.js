import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import StudentInfo from './student_info';
import Notes from './notes';
import Testing from './testing';
import {SingleElementContainer} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

function onClick(e, props)
{
  e.preventDefault();
  console.log(props);
}

export default withRouter(props => {
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
        <Link
          className="btn btn-lg btn-primary float-right"
          role="button"
          to="/report"
          onClick={e => onClick(e, props)}>
          Generate Report
        </Link>
      </SingleElementContainer>
    </div>
  );
});