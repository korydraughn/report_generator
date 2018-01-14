import React from 'react';
import {withRouter} from 'react-router-dom';
import {Form} from 'react-form';
import StudentInfo from './student_info';
import Notes from './notes';
import Testing from './testing';
import {SingleElementContainer} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

function onClick(e, props)
{
  //e.preventDefault();
  //console.log(e);
  console.log(props);
}

export default withRouter(props => {
  const {data} = props;
  const {start_date, end_date} = data.tests;
  const {student, notes, tests} = props.handlers;
  const {setState} = props.handlers;

  return (
    <div>
      <Form onSubmit={(submittedValues, e, formApi) => console.log("submitted = ", {...submittedValues}, "other = ", e, "formApi = ", formApi)}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="main-form">
            <StudentInfo data={{...data.student, start_date, end_date}} {...student} />
            <br />

            <Notes data={data.notes} {...notes} />
            <br />

            <Testing data={data.tests.data} {...tests} />

            <SingleElementContainer>
              <button
                onClick={e => onClick(e, props)}
                type="submit"
                className="btn btn-lg btn-primary float-right">
                Generate Report
              </button>
            </SingleElementContainer>
          </form>
        )}
      </Form>
    </div>
  );
});