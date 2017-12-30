import React from 'react';
import Textarea from './textarea';
import {SingleElementContainer} from './utils';

export default props => {
  return (
    <SingleElementContainer>
      <fieldset>
        <legend>Notes</legend>
        <Textarea label="Background Information (Optional)" rows={3} />
        <Textarea label="Significant Background Information (Optional)" rows={10} />
        <Textarea label="Behaviors Observed During Testing (Optional)" rows={3} />
      </fieldset>
    </SingleElementContainer>
  );
};