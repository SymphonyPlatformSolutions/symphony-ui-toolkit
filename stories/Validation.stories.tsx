import { withKnobs } from '@storybook/addon-knobs';
import React, { useState } from 'react';

import { DatePicker, TextArea, TextField, Validation } from '../src/components';
import { Validators } from '../src/core/validators/validators';

export const Validations = () => {
  const [date, setDate] = useState(null);
  const logChange = (value, errorsMap) => {
    if (!value) {
      console.log('Component is valid:', value);
    }
    if (errorsMap) {
      console.log('Errors Map:', errorsMap);
    }
  };
  const now = new Date();
  const disabledDays = [
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
    {
      before: new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()),
    },
    {
      after: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()),
    },
    {
      after: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 15),
      before: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 20),
    },
    {
      from: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 22),
      to: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 24),
    },
  ];

  return (
    <div style={{ width: '50%' }}>
      <h1>Validation</h1>
      <h2>Single validator</h2>
      <p>
        Text Field with <strong>Required validator</strong>
      </p>
      <Validation
        onValidationChanged={logChange}
        validator={Validators.Required}
        errorMessage={'This field is mandatory'}
      >
        <TextField
          placeholder="Firstname"
          onChange={() => {
            console.log('Existing onChange method called');
          }}
        />
      </Validation>
      <p>
        Text Field with <strong>MinLength validator</strong>
      </p>
      <Validation
        onValidationChanged={logChange}
        validator={Validators.MinLength(3)}
        errorMessage={'You need to enter 3 characters minimum'}
      >
        <TextField placeholder="How are you?" />
      </Validation>
      <p>
        Using <strong>pattern validator</strong>
      </p>
      <Validation
        onValidationChanged={logChange}
        validator={Validators.Pattern(/lorem.*/)}
        errorMessage={'Should start with lorem'}
      >
        <TextField placeholder="Magic word" />
      </Validation>
      <p>
        Date Picker with <strong>Required validator</strong>
      </p>
      <Validation
        onValidationChanged={logChange}
        validator={Validators.Required}
        errorMessage={'This field is required'}
      >
        <DatePicker
          todayButton="today"
          tooltip="Departure date"
          label="Expense"
          disabledDays={disabledDays}
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></DatePicker>
      </Validation>
      <h2>Multiple validators</h2>
      <p>
        Text Field with <strong>multiple validators</strong>: Mandatory number,
        with a minimum length of 3 characters
      </p>
      <Validation
        onValidationChanged={logChange}
        validator={[
          Validators.Required,
          Validators.Number,
          Validators.MinLength(3),
        ]}
        errorMessage={{
          required: 'This field is mandatory',
          number: 'Should be a number',
          minlength: 'Please type at least 3 numbers',
        }}
      >
        <TextField onChange={logChange} label="Number" placeholder="Age" />
      </Validation>
      <h2>Validation at initialization</h2>
      <p>
        Using <strong>validateOnInit</strong> parameter, you can give to the
        Validation component the value to validate at initialization.
      </p>
      <Validation
        onValidationChanged={logChange}
        validator={Validators.Pattern(/lorem.*/)}
        errorMessage={'Should start with lorem'}
        validateOnInit={'A value to validate'}
      >
        <TextField value={'A value to validate'} placeholder="Magic word" />
      </Validation>
      <h2>Controlled validation</h2>
      <p>
        Give to the Validation component the{' '}
        <strong>list of error messages</strong> with <strong>errors</strong>{' '}
        prop:
      </p>
      <Validation
        onValidationChanged={logChange}
        errors={['This user name already exists', 'This field is required']}
      >
        <TextField placeholder="Name" />
      </Validation>
      <h2>Can be attached to anything</h2>
      <p>The Validation component wraps the component to be validated.</p>
      <p>
        To be able to validate the component, the child component must take in
        parameters two methods: <strong>onChange</strong> and{' '}
        <strong>onBlur</strong> methods.
      </p>
      <p>
        Call onChange method when the child&apos;s value changes and call onBlur
        method when it loses the focus.
      </p>
      <p>Here another example with a validation on a Text Area</p>
      <Validation
        onValidationChanged={logChange}
        validator={[
          Validators.Required,
          Validators.Number,
          Validators.MinLength(3),
        ]}
        errorMessage={{
          required: 'This field is mandatory',
          number: 'Should be a number',
          minlength: 'Please type at least 5 characters',
        }}
      >
        <TextArea placeholder="Type something" />
      </Validation>
    </div>
  );
};

export default {
  title: 'Validations',
  component: Validation,
  subcomponents: { TextField, TextArea },
  decorators: [withKnobs],
};
