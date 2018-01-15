import _ from "lodash";
import React, {Component} from "react";
import {Form} from 'react-form';
import {TextField, SelectBox, DateField} from "./form_inputs";
import {SingleElementContainer} from "./utils";
import DAS2 from "./tests/das_2";

export default props => {
  return (
    <div>
      <SingleElementContainer>
        <Form>
          {formApi => (
            <form onSubmit={formApi.submitForm}>
              <DAS2 />
            </form>
          )}
        </Form>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </SingleElementContainer>
    </div>
  );
};