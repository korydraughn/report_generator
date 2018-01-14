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
          <Form validateError={errorValidator}>
            {formApi => (
              <div id="student-info-form">
                <Row>
                  <Col>
                    <TextField name="name" label="Student Name" error={formApi.errors.name} />
                    <SelectBox name="gender" label="Student Gender" options={gender_options} error={formApi.errors.gender} />
                    <TextField name="school" label="Student School" error={formApi.errors.school} />
                    <DateField name="dob" label="Student Date of Birth" error={formApi.errors.dob} />
                  </Col>
                  <Col>
                    <Row>
                      <Col><DateField name="testing_started" label="Date Administered - Start" error={formApi.errors.testing_started} /></Col>
                      <Col><DateField name="testing_ended" label="Date Administered - End" error={formApi.errors.testing_ended} /></Col>
                    </Row>
                    <TextField name="age" label="Age at Testing" error={formApi.errors.age} />
                    <SelectBox name="grade" label="Grade" options={grade_options} error={formApi.errors.grade} />
                    <TextField name="examiner" label="Examiner" error={formApi.errors.examiner} />
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

export function errorValidator(values)
{
  const {
    name,
    gender,
    school,
    dob,
    testing_started,
    testing_ended,
    age,
    grade,
    examiner
  } = values;

  const errors = {
    name: null,
    gender: null,
    school: null,
    dob: null,
    testing_started: null,
    testing_ended: null,
    age: null,
    grade: null,
    examiner: null
  };

  if (!name)
    errors.name = "Student Name is a required input.";

  if (!gender)
    errors.gender = "Student Gender is a required input.";

  if (!school)
    errors.school = "School is a required input.";

  if (!dob)
    errors.dob = "Date of Birth is a required input.";

  if (!testing_started)
    errors.testing_started = "Testing Start Date is a required input.";

  if (!testing_ended)
    errors.testing_ended = "Testing End Date is a required input.";

  if (!age || !/\d+/.test(age))
    errors.age = "Age is a required input.";

  if (!grade)
    errors.grade = "Grade is a required input.";

  if (!examiner)
    errors.examiner = "Examiner is a required input.";

  return errors;
}