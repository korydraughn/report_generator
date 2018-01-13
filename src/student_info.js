import _ from 'lodash';
import React from 'react';
import {Form, NestedForm} from 'react-form';
import {ContainerFluid, Row, Col} from './utils';
import {TextField, SelectBox, DateField} from './form_inputs';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const gender_options = [
    {label: "Male", value: "M"},
    {label: "Female", value: "F"}
  ];

  const grade_options = ["Pre-K", ..._.range(1, 13)].map(g => ({label: g, value: g}));

  return (
    <ContainerFluid>
      <fieldset>
        <legend>Student Demographics</legend>
        <NestedForm field="student">
          <Form>
            {formApi => (
              <div id="student-info-form">
                <Row>
                  <Col>
                    <TextField name="name" label="Student Name" />
                    <SelectBox name="gender" label="Student Gender" options={gender_options} />
                    <TextField name="school" label="Student School" />
                    <DateField name="dob" label="Student Date of Birth" />
                  </Col>
                  <Col>
                    <Row>
                      <Col><DateField name="testing_started" label="Date Administered - Start" /></Col>
                      <Col><DateField name="testing_ended" label="Date Administered - End" /></Col>
                    </Row>
                    <TextField name="age" label="Age at Testing" />
                    <SelectBox name="grade" label="Grade" options={grade_options} />
                    <TextField name="examiner" label="Examiner" />
                  </Col>
                </Row>
              </div>
            )}
          </Form>
        </NestedForm>
      </fieldset>
    </ContainerFluid>
  );
}