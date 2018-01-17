import React from 'react';
import {Form, NestedForm} from 'react-form';
import {MultiSelect} from './form_inputs';
import {SingleElementContainer} from './utils';
import * as test_spec from './test_spec';

import 'react-widgets/dist/css/react-widgets.css';

export default props => {
  const tests = [
    {id: test_spec.DAS_II,  name: "Differential Ability Scales - Second Edition (DAS-II)"},
    {id: test_spec.WJ4_ACH, name: "Woodcock Johnson Rests of Achievement - Fourth Edition (WJ-4:ACH)"}
  ];

  return (
    <div>
      <SingleElementContainer>
        <fieldset>
          <legend>Testing</legend>
          <NestedForm field="testing">
            <Form
              defaultValues={props.data}
              validateError={errorValidator}>
              {formApi => (
                <MultiSelect
                  name="tests_administered"
                  label="Tests Administered"
                  options={tests}
                  valueField="id"
                  textField="name" />
              )}
            </Form>
          </NestedForm>
        </fieldset>
      </SingleElementContainer>
    </div>
  );
};

function errorValidator(values)
{
  const {tests_administered} = values;

  return {
    tests_administered: tests_administered.length === 0 ? "You must select at least one Test" : null
  };
}