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
          onChange={props.onBackgroundInfoChange} />
        <Textarea
          label="Significant Background Information (Optional)"
          rows={10}
          onChange={props.onSignificantBackgroundInfoChange} />
        <Textarea
          label="Behaviors Observed During Testing (Optional)"
          rows={3}
          onChange={props.onBehaviorsObservedDuringTestingChange} />
      </fieldset>
    </SingleElementContainer>
  );
};