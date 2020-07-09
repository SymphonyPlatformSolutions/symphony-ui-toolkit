import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import React from 'react';
import { Input } from '../src/components';
import { Validators } from '../src/core/validators/validators';

export const Inputs: React.SFC = () => {
  const logChange = value => {
    console.info(value);
  };

  return (
    <div style={{ width: '50%' }}>
      <div>
        <p>Simple Input with change handler and a label</p>
        <Input
          label="Ipsum"
          placeholder="Firstname"
          value="Lorem"
          onChange={logChange}
        ></Input>
      </div>
      <hr />
      <div>
        <p>Simple Input with change handler and a tooltip</p>
        <Input
          tooltip="Ipsum"
          placeholder="Firstname"
          value="Lorem"
          onChange={logChange}
        ></Input>
      </div>
      <div>
        <p>Simple Input with change handler with a label and a tooltip</p>
        <Input
          label="Ipsum"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
          label="Number"
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
    </div>
  );
};

export const ChangeProgrammatically = () => (
  <div style={{ width: '50%' }}>
    <p>Manipulate programmatically: Use knobs</p>
    <Input
      placeholder="Firstname"
      value=""
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
