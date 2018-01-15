import _ from "lodash";
import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import {Form} from 'react-form';
import {TextField, SelectBox, DateField} from "./form_inputs";
import {SingleElementContainer} from "./utils";
import DAS2 from "./tests/das_2";
import WJ4 from "./tests/wj4_ach";
import * as test_spec from "./test_spec";

export default withRouter(props => {
  const {tests_administered, data} = props.data;

  const onSubmit = (values, e, formApi) => onSubmitSuccess(values, e, formApi, props);

  return (
    <div>
      <SingleElementContainer>
        <Form
          dontValidateOnMount={false}
          onSubmit={onSubmit}
          onSubmitFailure={onSubmitFailure}>
          {formApi => (
            <form onSubmit={formApi.submitForm}>
              {tests_administered.map(t => <Test key={t.id} typeInfo={t} data={data[t.id]} />)}
              <div>
                <button type="submit" className="btn btn-lg btn-primary float-right">
                  Generate Report
                </button>
              </div>
            </form>
          )}
        </Form>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </SingleElementContainer>
    </div>
  );
});

function Test(props)
{
  const {typeInfo, data} = props;

  return (
    <div style={{marginBottom: "3rem"}}>
      {
        typeInfo.id === test_spec.DAS_II ? <DAS2 data={data} /> :
        typeInfo.id === test_spec.WJ4_ACH ? <WJ4 data={data} /> :
        null
      }
    </div>
  );
}

function onSubmitSuccess(values, e, formApi, props)
{
  console.debug("Values from Tests: ", values);

  const {history} = props;
  const {tests_administered} = props.data;
  const {setAppState} = props.handlers;

  setAppState({testing: {tests_administered, data: values}});
  //history.push("/report");
}

function onSubmitFailure(errors, formApi, onSubmitError)
{
  console.error("Errors found: ", errors);
}