import React, { useState } from 'react';
import './App.css';

import TextField from './components/TextField';
import DateField from './components/DateField';

const DEFAULT_SCHEME = [
  {
    id: 'ClientName',
    fieldType: 'TextField',
    fieldProps: {
      name: 'name',
      placeholder: 'John Doe'
    }
  },
  {
    id: 'StartDate',
    fieldType: 'DateField',
    fieldProps: {
      name: 'start'
    }
  }
];

function App() {
  const [validScheme, setValidScheme] = useState(true);
  const [scheme, setScheme] = useState(JSON.stringify(DEFAULT_SCHEME, null, 2));
  const [formState, setFormState] = useState({});

  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Enter your JSON <span role="img" aria-label="here">👇</span></legend>
          <textarea
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
        <fieldset>
          <button type="submit">Update</button>
        </fieldset>
      </form>
      <div>
        <div>
          <h2>Data Driven Form</h2>
          {validScheme &&
            <DataDrivenForm
              scheme={JSON.parse(scheme)}
              onSubmit={(state) => setFormState(state)}
            />
          }
          {!validScheme && <div>Scheme parsing failed</div>}
        </div>
        <div>
          <h2>Form state</h2>
          <pre>{JSON.stringify(formState, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

function DataDrivenForm({ scheme, onSubmit }) {
  const [state, setState] = useState({});
  // Object.assign is necessary here to create a new object for the next state,
  // Otherwise React sees the same reference at does not rerender
  const onChange = (name, value) => setState(Object.assign({}, state, { [name]: value }));

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(state);
    }}>
      {scheme.map(({ id, fieldType, fieldProps }) => {
        switch (fieldType) {
          case 'TextField':
            return <TextField key={id} {...fieldProps} onChange={onChange} />;
          case 'DateField':
            return <DateField key={id} {...fieldProps} onChange={onChange} />;
          default:
            return `Unknown fieldType ${fieldType}`;
        }
      })}
      <button type="submit">Go!</button>
    </form>
  )
}

export default App;
