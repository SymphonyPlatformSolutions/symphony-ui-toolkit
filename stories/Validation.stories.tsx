import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { TextArea, TextField, Validation } from '../src/components';
import { Validators } from '../src/core/validators/validators';

export const Validations = () => {
  const logChange = (value) => {
    console.log('Component is valid:', value);
  };
  return (
    <div className="tk-text-color" style={{ width: '50%' }}>
      <h1>Validation</h1>
      <h2>Single validator</h2>
      <p>
        Text Field with <strong>Required validator</strong>
      </p>
      <Validation
        onValidationChanged={logChange}
        validator={Validators.Required}
        errorMessage={{ required: 'This field is mandatory' }}
      >
        <TextField
          placeholder="Firstname"
          onChange={() => {
            console.log('Existing onChange method called');
          }}
        ></TextField>
      </Validation>
      <h2>Multiple validators</h2>
      <p>
        Text Field with <strong>multiple validators</strong>: Mandatory number,
        with a minimum length of 3 characters
      </p>
      <Validation
        onValidationChanged={logChange}
        errorMessage={{
          required: 'This field is mandatory',
          number: 'Should be a number',
          minlength: 'Please type at least 3 numbers',
        }}
        validator={[
          Validators.Required,
          Validators.Number,
          Validators.MinLength(3),
        ]}
      >
        <TextField placeholder="Firstname"></TextField>
      </Validation>
      <h2>Can be attached to anything</h2>
      <p>Text Field, Text Area</p>
      <Validation
        onValidationChanged={logChange}
        errorMessage={{
          required: 'This field is mandatory',
          number: 'Should be a number',
          minlength: 'Please type at least 3 numbers',
        }}
        validator={[
          Validators.Required,
          Validators.Number,
          Validators.MinLength(3),
        ]}
      >
        <TextField placeholder="Firstname"></TextField>
      </Validation>
      <Validation
        onValidationChanged={logChange}
        errorMessage={{
          required: 'This field is mandatory',
          number: 'Should be a number',
          minlength: 'Please type at least 3 numbers',
        }}
        validator={[
          Validators.Required,
          Validators.Number,
          Validators.MinLength(3),
        ]}
      >
        <TextArea placeholder="Firstname"></TextArea>
      </Validation>
    </div>
  );
};

export default {
  title: 'Validations',
  decorators: [withKnobs],
};
