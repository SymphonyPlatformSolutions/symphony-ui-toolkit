import { boolean, button, text, withKnobs } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { TextField, Icon } from '../src/components';

import { Validators } from '../src/core/validators/validators';

const Template = (args) => {
  return <TextField {...args} />;
};

export const Default = Template.bind({});

export const TextFields: React.SFC = () => {
  const logChange = (value) => {
    console.info(value);
  };

  const [value, setValue] = useState('Lorem Ipsum');

  return (
    <div style={{ width: '50%' }}>
      <h1>Text Field</h1>
      <div>
        <p>
          Simple Text Field with a <strong>placeholder</strong>
        </p>
        <TextField placeholder="Firstname"></TextField>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Field with a <strong>change handler</strong> logging in
          the browser console
        </p>
        <TextField placeholder="Firstname" onChange={logChange}></TextField>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Field with a <strong>label</strong>
        </p>
        <p>
          {' '}
          If the attribute id is defined, it will be attached to the label as a
          &apos;for&apos; attribute.
        </p>
        <TextField
          id="input-1234567890"
          label="Ipsum"
          placeholder="Firstname"
        ></TextField>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Field with an <strong>icon</strong>
        </p>
        <TextField
          iconElement={
            <Icon iconName={'calendar'}  />
          }
        ></TextField>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Field with an <strong>icon</strong>, method{' '}
          <strong>handlers</strong> and <strong>tabIndex</strong>
        </p>
        <TextField
          iconElement={
            <Icon
              iconName={'calendar'}
              tabIndex={0}
              onClick={() => logChange('clicked')}
              onKeyDown={logChange}
            />
          }
        ></TextField>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Field with a <strong>tooltip</strong>
        </p>
        <TextField
          tooltip="More information"
          tooltipCloseLabel="Got it"
          placeholder="Type something"
        ></TextField>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Field with a <strong>label</strong> and a{' '}
          <strong>tooltip</strong>
        </p>
        <TextField
          label="Ipsum"
          tooltip="More information"
          tooltipCloseLabel="Got it"
          placeholder="Type something"
        ></TextField>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Field with a <strong>value</strong>
        </p>
        <TextField placeholder="Type something" value={value} onChange={(e) => setValue(e.target.value)}></TextField>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Field with <strong>masked data</strong>
        </p>
        <TextField value="Lorem" masked={true} onChange={logChange}></TextField>
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
      <TextField
        ref={this.child}
        placeholder="Firstname"
        value={text('Default value', '')}
        dirty={boolean('Dirty', false)}
        errors={{ required: 'This field is mandatory' }}
        validator={Validators.Required}
        aria-label="Field"
      ></TextField>
    </div>
  );
};

export default {
  title: 'TextField',
  component: TextField,
  subcomponents: { Icon },
  decorators: [withKnobs],
};
