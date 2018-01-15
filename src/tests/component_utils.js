import React from "react";
import {Text, Select} from "react-form";
import {Message} from "../form_inputs";

export function TextField(props)
{
  const {field, error} = props;

  return (
    <div>
      <Text field={field} className="form-control" />
      {error ? <Message color="red" message={error} /> : null}
    </div>
  );
}

export function SelectField(props)
{
  const {field, options, error} = props;

  return (
    <div>
      <Select field={field} options={options} className="form-control" />
      {error ? <Message color="red" message={error} /> : null}
    </div>
  );
}