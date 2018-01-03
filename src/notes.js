import React from 'react';
import Textarea from './textarea';
import {SingleElementContainer} from './utils';

export default props => {
  return (
    <SingleElementContainer>
      <fieldset>
        <legend>Notes</legend>
        <Textarea
          label="Reason For Referral (Optional)"
          rows={3}
          onChange={props.onReasonForReferralChange}
          value={props.data.rfr} />
        <Textarea
          label="Significant Background Information (Optional)"
          rows={10}
          onChange={props.onSignificantBackgroundInfoChange}
          value={props.data.sbg} />
        <Textarea
          label="Behaviors Observed During Testing (Optional)"
          rows={3}
          onChange={props.onBehaviorsObservedDuringTestingChange}
          value={props.data.bodt} />
        <Textarea
          label="Summary &amp; Conclusions"
          rows={3}
          onChange={props.onSummaryAndConclusionsChange}
          value={props.data.sac} />
      </fieldset>
    </SingleElementContainer>
  );
};