import React, { useState, useEffect } from 'react';
import './App.css';
import Fields from './Fields';

import DEFAULT_SCHEME from './default-scheme';

function App() {
  const [validScheme, setValidScheme] = useState(true);
  const [scheme, setScheme] = useState(JSON.stringify(DEFAULT_SCHEME, null, 2));
  const [formState, setFormState] = useState({});

  useEffect(() => {
    try {
      setFormState(getDefaultState(JSON.parse(scheme)));
    } catch (e) {
      setFormState({});
    }
  }, [scheme])

  return (
    <div className="app app-layout-cols">
      <form className="app-layout-cell">
        <fieldset className="app-scheme-form-fieldset">
          <legend className="app-scheme-form-header">
            Enter your JSON <span role="img" aria-label="here">👇</span>
          </legend>
          <textarea
            className="app-scheme-form-textarea"
            name="scheme"
            value={scheme}
            onChange={(e) => {
              setScheme(e.target.value);

              try {
                JSON.parse(e.target.value);
                setValidScheme(true);
              } catch (e) {
                setValidScheme(false);
              }
            }}
          />
        </fieldset>
      </form>
      <div className="app-layout-cell app-layout-rows">
        <div className="app-layout-cell">
          <h2>Data Driven Form</h2>
          {validScheme &&
            <DataDrivenForm
              scheme={JSON.parse(scheme)}
              formState={formState}
              onSubmit={(state) => setFormState(state)}
            />
          }
          {!validScheme && <div>Scheme parsing failed</div>}
        </div>
        <div className="app-layout-cell">
          <h2>Form state</h2>
          <pre>{JSON.stringify(formState, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

function DataDrivenForm({ scheme, formState, onSubmit }) {
  const [state, setState] = useState(formState);
  // Object.assign is necessary here to create a new object for the next state,
  // Otherwise React sees the same reference at does not rerender
  const onChange = (name, value) => setState(Object.assign({}, state, { [name]: value }));

  return (
    <form
      className="app-data-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(state);
      }}
    >
      <div className="app-data-form-lines-wrapper">
        {scheme.map(({ id, fieldType, fieldProps, defaultChecked, hideIfChecked }) => {
          const Field = Fields[fieldType];

          if (fieldType === 'RadioButtonField' || fieldType === 'CheckboxField') {
            if (typeof state[fieldProps.name] !== 'undefined') {
              fieldProps.checked = state[fieldProps.name] === fieldProps.value;
            } else {
              fieldProps.checked = !!defaultChecked;
            }
          }

          if (hideIfChecked && hideIfChecked.every((seekedId) => {
            const field = scheme.find(({ id }) => id === seekedId);
            return field && field.fieldProps.checked;
          })) {
            return null;
          }

          return (
            <div className="app-data-form-line" key={id}>
              {Field && <Field {...fieldProps} onChange={onChange} />}
              {!Field && `Unknown fieldType ${fieldType}`}
            </div>
          );
        })}
      </div>
      <button className="app-submit" type="submit">Go!</button>
    </form>
  )
}

function getDefaultState(scheme) {
  return scheme.reduce((result, { fieldType, fieldProps, defaultChecked }) => {
    if ((fieldType === 'RadioButtonField' || fieldType === 'CheckboxField') && defaultChecked) {
      result[fieldProps.name] = fieldProps.value;
    }
    return result;
  }, {});
}

export default App;
