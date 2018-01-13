import React from 'react';
import {Form, NestedForm} from 'react-form';
import {TextArea} from './form_inputs';
import {SingleElementContainer} from './utils';

export default props => {
  return (
    <SingleElementContainer>
      <fieldset>
        <legend>Notes</legend>
        <NestedForm field="notes">
          <Form>
            {formApi => (
              <div id="notes-form">
                <TextArea
                  name="rfr"
                  label="Reason For Referral (Optional)"
                  rows={3} />
                <TextArea
                  name="sbi"
                  label="Significant Background Information (Optional)"
                  rows={10} />
                <TextArea
                  name="bodt"
                  label="Behaviors Observed During Testing (Optional)"
                  rows={3} />
                <TextArea
                  name="sac"
                  label="Summary &amp; Conclusions"
                  rows={3} />
              </div>
            )}
          </Form>
        </NestedForm>
      </fieldset>
    </SingleElementContainer>
  );
};