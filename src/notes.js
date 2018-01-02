import React from 'react';
import Textarea from './textarea';
import {SingleElementContainer} from './utils';

export default props => {
  return (
    <SingleElementContainer>
      <fieldset>
        <legend>Notes</legend>
        <Textarea
          label="Background Information (Optional)"
          rows={3}
          onChange={props.onBackgroundInfoChange}
          value={props.data.bg_info} />
        <Textarea
          label="Significant Background Information (Optional)"
          rows={10}
          onChange={props.onSignificantBackgroundInfoChange}
          value={props.data.sbg_info} />
        <Textarea
          label="Behaviors Observed During Testing (Optional)"
          rows={3}
          onChange={props.onBehaviorsObservedDuringTestingChange}
          value={props.data.bodt_info} />
      </fieldset>
    </SingleElementContainer>
  );
};