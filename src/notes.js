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
          <Form
            dontValidateOnMount={true}
            validateOnSubmit={true}
            defaultValues={props.data}
            validateWarning={warningValidator}>
            {formApi => (
              <div id="notes-form">
                <TextArea
                  name="rfr"
                  label="Reason For Referral (Optional)"
                  rows={3}
                  warning={formApi.warnings.rfr} />
                <TextArea
                  name="sbgi"
                  label="Significant Background Information (Optional)"
                  rows={10}
                  warning={formApi.warnings.sbgi} />
                <TextArea
                  name="bodt"
                  label="Behaviors Observed During Testing (Optional)"
                  rows={3}
                  warning={formApi.warnings.bodt} />
                <TextArea
                  name="sac"
                  label="Summary &amp; Conclusions"
                  rows={3}
                  warning={formApi.warnings.sac} />
              </div>
            )}
          </Form>
        </NestedForm>
      </fieldset>
    </SingleElementContainer>
  );
};

export function warningValidator(values)
{
  const {rfr, sbgi, bodt, sac} = values;

  return {
    rfr: !rfr ? "It is highly recommended that you provide this information." : null,
    sbgi: !sbgi ? "It is highly recommended that you provide this information." : null,
    bodt: !bodt ? "It is highly recommended that you provide this information." : null,
    sac: !sac ? "It is highly recommended that you provide this information." : null
  };
}