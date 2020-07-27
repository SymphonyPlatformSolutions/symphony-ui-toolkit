import { withKnobs, boolean, button, text } from '@storybook/addon-knobs';
import React from 'react';
import { TextField } from '../src/components';
import { Validators } from '../src/core/validators/validators';

export const Validator: React.SFC = () => {
  const logChange = (value) => {
    console.info(value);
  };

  return (
    <div style={{ width: '50%' }}>
      <h1>Validator</h1>
      <p>
        All following validators can be applied to a <strong>Text Field</strong> or a <strong>Text Area</strong>
      </p>
      <p>
        Validation only executes when field is touched or dirty, you can also assign a validation change handler.
      </p>
      <h2>Required validator</h2>
      <div>
        <p>Text Field with <strong>Required validator</strong></p>
        <TextField
          placeholder="Firstname"
          errors={{ required: 'This field is mandatory' }}
          onValidationChanged={logChange}
          validator={Validators.Required}
        ></TextField>
      </div>
      <h2>MinLength validator</h2>
      <div>
        <p>Text Field with <strong>MinLength validator</strong></p>
        <TextField
          placeholder="How are you?"
          errors={{ minlength: 'You need to enter 3 characters minimum' }}
          validator={Validators.MinLength(3)}
        ></TextField>
      </div>
      <h2>Multiple validators</h2>
      <div>
        <p>
          Support <strong>multiple validators</strong>: Mandatory number, with a minimum length
          of 3 characters
        </p>
        <TextField
          onChange={logChange}
          label="Number"
          errors={{
            required: 'This field is mandatory',
            number: 'Should be a number',
            minlength: 'Please type at least 3 numbers',
          }}
          validator={[
            Validators.Required,
            Validators.Number,
            Validators.MinLength(3),
          ]}
          placeholder="Age"
        ></TextField>
      </div>
      <h2>Pattern validator</h2>
      <div>
        <p>Using <strong>pattern validator</strong></p>
        <TextField
          errors={{
            pattern: 'Should start with lorem',
          }}
          validator={[Validators.Pattern(/lorem.*/)]}
          placeholder="Magic word"
        ></TextField>
      </div>
    </div>
  );
};

export default {
  title: 'Validator',
  decorators: [withKnobs],
};
