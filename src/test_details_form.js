import _ from "lodash";
import React, {Component} from "react";
import {Form} from 'react-form';
import {TextField, SelectBox, DateField} from "./form_inputs";
import {SingleElementContainer} from "./utils";
import DAS2 from "./tests/das_2";
import WJ4 from "./tests/wj4_ach";
import * as test_spec from "./test_spec";

export default props => {
  console.debug(props);
  const {tests_administered} = props.data;

  return (
    <div>
      <SingleElementContainer>
        <Form>
          {formApi => (
            <form onSubmit={formApi.submitForm}>
              {tests_administered.map(t => <Test key={t.id} typeInfo={t} />)}
            </form>
          )}
        </Form>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </SingleElementContainer>
    </div>
  );
};

function Test(props)
{
  const {typeInfo} = props;

  return (
    typeInfo.id === test_spec.DAS_II  ? <DAS2 /> :
    typeInfo.id === test_spec.WJ4_ACH ? <WJ4 /> :
    null
  );
}