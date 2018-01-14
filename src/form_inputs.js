import React from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import {DateTimePicker, Multiselect} from 'react-widgets';
import {Text, Select, TextArea as ReactFormTextArea, FormField} from 'react-form';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

Moment.locale("en");
momentLocalizer();

function Message({color, message})
{
  return (
    <div style={{color}}>
      <small>{message}</small>
    </div>
  );
}

export function TextField(props)
{
  const {name, label, error, warning} = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <Text field={name} id={name} className="form-control" />
      {error ? <Message color="red" message={error} /> : null}
      {!error && warning ? <Message color="orange" message={warning} /> : null}
    </div>
  );
}

export function TextArea(props)
{
  const {name, label, rows, error, warning} = props;
  const style = {resize: "none"};

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <ReactFormTextArea field={name} rows={rows} className="form-control" style={style} />
      {error ? <Message color="red" message={error} /> : null}
      {!error && warning ? <Message color="orange" message={warning} /> : null}
    </div>
  );
}

export function SelectBox(props)
{
  const {name, label, options, error, warning} = props;
  
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <Select field={name} id={name} options={options} className="form-control" />
      {error ? <Message color="red" message={error} /> : null}
      {!error && warning ? <Message color="orange" message={warning} /> : null}
    </div>
  );
}

const DateFieldImpl = FormField(props => {
  const {
    fieldApi, 
    onInput, 
    name, 
    label, 
    ...rest
  } = props;

  const {
    getValue,
    getError,
    getWarning,
    getSuccess,
    setValue,
    setError,
    setTouched
  } = fieldApi;

  const error = getError();
  const warning = getWarning();
  const success = getSuccess();
  const d = getValue();

  return (
    <div>
      <DateTimePicker
        name={name}
        time={false}
        format="YYYY-MM-DD"
        onChange={date => {
          if (!date)
          {
            //setError("Invalid Date");
            return;
          }

          setValue({
            y: date.getFullYear(),
            m: date.getMonth(),
            d: date.getDate()
          });
        }}
        defaultValue={d ? new Date(d.y, d.m, d.d) : null}
        onBlur={() => setTouched()}
        {...rest} />
      {error ? <Message color="red" message={error} /> : null}
      {!error && warning ? <Message color="orange" message={warning} /> : null}
      {!error && !warning && success ? <Message color="green" message={success} /> : null}
    </div>
  );
});

export function DateField(props)
{
  const {name, label} = props;
  
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <DateFieldImpl field={name} />
    </div>
  );
}

const MultiSelectImpl = FormField(props => {
  const {
    fieldApi, 
    onInput, 
    name, 
    label, 
    options,
    ...rest
  } = props;

  const {
    getValue,
    getError,
    getWarning,
    getSuccess,
    setValue,
    setError,
    setTouched
  } = fieldApi;

  const error = getError();
  const warning = getWarning();
  const success = getSuccess();

  return (
    <div>
      <Multiselect
        name={name}
        data={options}
        onChange={selections => {
          setValue(selections);
        }}
        _defaultValue={getValue()}
        onBlur={() => setTouched()}
        {...rest} />
      {error ? <Message color="red" message={error} /> : null}
      {!error && warning ? <Message color="orange" message={warning} /> : null}
      {!error && !warning && success ? <Message color="green" message={success} /> : null}
    </div>
  );
});

export function MultiSelect(props)
{
  const {name, label} = props;
  
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <MultiSelectImpl field={name} {...props} />
    </div>
  );
}