export default [
  {
    id: 'JobTitle',
    fieldType: 'TextField',
    fieldProps: {
      name: 'job_title',
      placeholder: 'CEO and Director'
    }
  },
  {
    id: 'EmploymentPeriod1',
    fieldType: 'RadioButtonField',
    fieldProps: {
      name: 'employment_period',
      value: 'Fixed Term',
      checked: true
    }
  },
  {
    id: 'EmploymentPeriod2',
    fieldType: 'RadioButtonField',
    fieldProps: {
      name: 'employment_period',
      value: 'Permanent'
    }
  },
  {
    id: 'CurrentEmployment',
    fieldType: 'CheckboxField',
    fieldProps: {
      name: 'current_employment'
    }
  },
  {
    id: 'EmployerName',
    fieldType: 'TextField',
    fieldProps: {
      name: 'employer_name',
      placeholder: 'Google'
    }
  },
  {
    id: 'StartDate',
    fieldType: 'DateField',
    fieldProps: {
      name: 'start_date'
    }
  },
  {
    id: 'EndDate',
    fieldType: 'DateField',
    fieldProps: {
      name: 'end_date'
    }
  },
  {
    id: 'ContactNumber',
    fieldType: 'PhoneNumberField',
    fieldProps: {
      name: 'contact_number',
      placeholder: '650-253-0000'
    }
  },
  {
    id: 'Email',
    fieldType: 'EmailField',
    fieldProps: {
      name: 'email',
      placeholder: 'larry@google.com'
    }
  }
];
