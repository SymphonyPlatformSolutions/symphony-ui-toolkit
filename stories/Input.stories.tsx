import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import React from 'react';
import { Input } from '../src/components';
import { Validators } from '../src/core/validators/validators';

export const Inputs: React.SFC = () => {
  const logChange = value => {
    console.info(value);
  };

  return (
    <React.Fragment>
      <div>
        <p>Simple Input with change handler</p>
        <Input
          placeholder="Firstname"
          value="Lorem"
          onChange={logChange}
        ></Input>
      </div>
      <hr />
      <div>
        <p>
          Input with Required validator: validation only executes when field is
          touched or dirty, you can also assign a validation change handler
        </p>
        <Input
          placeholder="Firstname"
          errors={{ required: 'This field is mandatory' }}
          onValidationChanged={logChange}
          validator={Validators.Required}
        ></Input>
      </div>
      <hr />
      <div>
        <p>Support multiple validators: Mandatory number</p>
        <Input
          onChange={logChange}
          errors={{
            required: 'This field is mandatory',
            number: 'Should be a number'
          }}
          validator={[Validators.Required, Validators.Number]}
          placeholder="Age"
        ></Input>
      </div>
      <hr />
      <div>
        <p>Using pattern validator</p>
        <Input
          errors={{
            pattern: 'Should start with lorem'
          }}
          validator={[Validators.Pattern(/lorem.*/)]}
          placeholder="Magic word"
        ></Input>
      </div>
    </React.Fragment>
  );
};

export const ChangeProgrammatically = () => (
  <div>
    <p>Manipulate programmatically: Use knobs</p>
    <Input
      placeholder="Firstname"
      value="My first name"
      dirty={boolean('Dirty', false)}
      errors={{ required: 'This field is mandatory' }}
      validator={Validators.Required}
      aria-label="Field"
    ></Input>
  </div>
);

export default {
  title: 'Input',
  decorators: [withKnobs]
};
