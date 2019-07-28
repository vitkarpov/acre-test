## Architecture

There's `DataDrivenForm` component which takes a scheme to its props, renders the form. The state contains values of the form fields and it's being logged on submit.

Each child component (Field) gets `onChange` handler in its props which gathers a piece of data to build into the form state.

There are a few different components (Field Types):

- `TextField` (job title, employer name)
- `DateField` (start date, end date)
- `PhoneNumberField` (contact number)
- `EmailField` (email address)
- `RadioButtonField` (employment period)
- `CheckboxField` (current employment)

## JSON Scheme

Each item in array of fields should have the following properties:

- `id` (unique identifier)
- `fieldType` (enum of field types)
- `fieldProps` (object with all the props a particular field needs)
- `defaultChecked` (applicable for checkboxes and radiobuttons)

Default scheme (in `default-scheme.js`):

- Job title
- Employment period (radio button, "Fixed term" or "Permanent")
- Current employment (checkbox, toggle yes/no)
- Start date
- End date
- Employer name
- Contact number
- Email address

You also can specify a dependency between two fiels, for instance, if the "current employment" checkbox is checked it doesn't make sense to show "end date". You can do it like this:

```
// CurrentEmployment is id of a field this one depends on
hideIfChecked: ['CurrentEmployment']
```

**TODO** Make a formal JSON scheme (https://json-schema.org/)

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
