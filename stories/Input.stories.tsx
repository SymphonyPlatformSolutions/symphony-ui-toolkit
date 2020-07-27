import { withKnobs, boolean, button, text, } from '@storybook/addon-knobs';
import React from 'react';
import { TextField } from '../src/components';
import { Validators } from '../src/core/validators/validators';

export const Inputs: React.SFC = () => {
  const logChange = (value) => {
    console.info(value);
  };

  return (
    <div style={{ width: '50%' }}>
      <div>
        <p>Simple Input with change handler and a label</p>
        <TextField
          label="Ipsum"
          placeholder="Firstname"
          value="Lorem"
          onChange={logChange}
        ></TextField>
      </div>
      <hr />
      <div>
        <p>Simple Input with change handler and a tooltip</p>
        <TextField
          tooltip="Ipsum"
          tooltipCloseLabel="Got it"
          placeholder="Firstname"
          value="Lorem"
          onChange={logChange}
        ></TextField>
      </div>
      <hr />
      <div>
        <p>Simple Input with change handler with a label and a tooltip. If the attribute id is defined, it will be attached to the label as a 'for' attribute.</p>
        <TextField
          id="input-1234567890"
          label="Ipsum"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tooltipCloseLabel="Got it"
          placeholder="Firstname"
          value="Lorem"
          onChange={logChange}
        ></TextField>
      </div>
      <hr />
      <div>
        <p>Simple Input with masked data</p>
        <TextField
          value="Lorem"
          masked={true}
          onChange={logChange}
        ></TextField>
      </div>
      <hr />
      <div>
        <p>
          Input with Required validator: validation only executes when field is
          touched or dirty, you can also assign a validation change handler
        </p>
        <TextField
          placeholder="Firstname"
          errors={{ required: 'This field is mandatory' }}
          onValidationChanged={logChange}
          validator={Validators.Required}
        ></TextField>
      </div>
      <hr />
      <div>
        <p>Input with MinLength validator</p>
        <TextField
          placeholder="How are you?"
          errors={{ minlength: 'You need to enter 3 characters minimum' }}
          validator={Validators.MinLength(3)}
        ></TextField>
      </div>
      <hr />
      <div>
        <p>Support multiple validators: Mandatory number, with a minimum length of 3 characters</p>
        <TextField
          onChange={logChange}
          label="Number"
          errors={{
            required: 'This field is mandatory',
            number: 'Should be a number',
            minlength: 'Please type at least 3 numbers'
          }}
          validator={[Validators.Required, Validators.Number, Validators.MinLength(3)]}
          placeholder="Age"
        ></TextField>
      </div>
      <hr />
      <div>
        <p>Using pattern validator</p>
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

export const ChangeProgrammatically = () => {
  this.child = React.createRef();

  const labelClear = 'Reset';
  const reset = () => this.child.current.reset();
  button(labelClear, reset);

  const labelRefresh = 'Refresh validation';
  const refresh = () => this.child.current.refreshValidation().then((isValid) => console.log(isValid));
  button(labelRefresh, refresh);

  return (<div style={{ width: '50%' }}>
    <p>Manipulate programmatically: Use knobs</p>
    <TextField
      ref={this.child}
      placeholder="Firstname"
      value={text('Default value', '')}
      dirty={boolean('Dirty', false)}
      errors={{ required: 'This field is mandatory' }}
      validator={Validators.Required}
      aria-label="Field"
    ></TextField>
  </div>);
};

export default {
  title: 'Input',
  decorators: [withKnobs],
};
