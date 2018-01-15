import React from 'react';
import {withRouter} from 'react-router-dom';
import {Form} from 'react-form';
import StudentInfo from './student_info';
import Notes from './notes';
import Testing from './testing';
import {SingleElementContainer} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default withRouter(props => {
  const {data} = props;
  const {student, notes, tests} = props.handlers;

  const onSubmit = (values, e, formApi) => onSubmitSuccess(values, e, formApi, props);

  return (
    <div>
      <Form
        dontValidateOnMount={false}
        onSubmit={onSubmit}
        onSubmitFailure={onSubmitFailure}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="main-form">
            <StudentInfo data={data.student} {...student} />
            <br />

            <Notes data={data.notes} {...notes} />
            <br />

            <Testing data={data.testing} {...tests} />

            <SingleElementContainer>
              <button type="submit" className="btn btn-lg btn-primary float-right">
                Next
              </button>
            </SingleElementContainer>
          </form>
        )}
      </Form>
    </div>
  );
});

function onSubmitSuccess(values, e, formApi, props)
{
  const {match, location, history} = props;
  const {setAppState} = props.handlers;

  setAppState(values);
  history.push("/test-details");
}

function onSubmitFailure(errors, formApi, onSubmitError)
{
  console.error("Errors found: ", errors);
}