import { withKnobs, boolean, button, text } from '@storybook/addon-knobs';
import React from 'react';
import { TextArea } from '../src/components';
import { Validators } from '../src/core/validators/validators';

export const TextAreas: React.SFC = () => {
  const logChange = (value) => {
    console.info(value);
  };

  return (
    <div style={{ width: '50%' }}>
      <h1>Text Area</h1>
      <h2>Basics</h2>
      <div>
        <p>Simple Text Area with a <strong>placeholder</strong></p>
        <TextArea
          placeholder="Type something"
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>Simple Text Area with a <strong>change handler</strong> logging in the browser console</p>
        <TextArea
          placeholder="Type something"
          onChange={logChange}
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>Simple Text Area with a <strong>label</strong></p>
        <p> If the attribute id is defined, it will be attached to the label as a 'for' attribute.</p>
        <TextArea
          id="input-1234567890"
          label="Lorem Ipsum"
          placeholder="Type something"
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>Simple Text Area with a <strong>tooltip</strong></p>
        <TextArea
          tooltip="More information"
          tooltipCloseLabel="Got it"
          placeholder="Type something"
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>Simple Text Area with a <strong>label</strong> and a <strong>tooltip</strong></p>
        <TextArea
          label="Lorem Ipsum"
          tooltip="More information"
          tooltipCloseLabel="Got it"
          placeholder="Type something"
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>Simple Text Area with a <strong>default value</strong></p>
        <TextArea
          placeholder="Type something"
          value="Lorem Ipsum"
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>Simple Text Area with <strong>masked data</strong></p>
        <TextArea value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" masked={true} onChange={logChange}></TextArea>
      </div>
      <hr />
      <h2>Validators</h2>
      <div>
        <p>
          Text Area with <strong>Required validator</strong>: validation only executes when field
          is touched or dirty, you can also assign a validation change handler
        </p>
        <TextArea
          placeholder="How are you?"
          errors={{ required: 'This field is mandatory' }}
          onValidationChanged={logChange}
          validator={Validators.Required}
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>Text Area with <strong>MinLength validator</strong></p>
        <TextArea
          placeholder="How are you?"
          errors={{ minlength: 'You need to enter 3 characters minimum' }}
          validator={Validators.MinLength(3)}
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>
          Support <strong>multiple validators</strong>: Mandatory number, with a minimum length
          of 3 characters
        </p>
        <TextArea
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
          placeholder="Type something"
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>Using <strong>pattern validator</strong></p>
        <TextArea
          errors={{
            pattern: 'Should start with lorem',
          }}
          validator={[Validators.Pattern(/lorem.*/)]}
          placeholder="Magic word"
        ></TextArea>
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
  const refresh = () =>
    this.child.current
      .refreshValidation()
      .then((isValid) => console.log(isValid));
  button(labelRefresh, refresh);

  return (
    <div style={{ width: '50%' }}>
      <p>Manipulate programmatically: Use knobs</p>
      <TextArea
        ref={this.child}
        placeholder="Firstname"
        value={text('Default value', '')}
        dirty={boolean('Dirty', false)}
        errors={{ required: 'This field is mandatory' }}
        validator={Validators.Required}
        aria-label="Field"
      ></TextArea>
    </div>
  );
};

export default {
  title: 'TextArea',
  decorators: [withKnobs],
};
