import { withKnobs, boolean, button, text } from '@storybook/addon-knobs';
import * as React from 'react';
import { TextArea } from '../src/components';
import { Validators } from '../src/core/validators/validators';

const Template = (args) => {
  return <TextArea {...args} />;
};

export const Default = Template.bind({});

export const TextAreas: React.SFC = () => {
  const logChange = (value) => {
    console.info(value);
  };

  return (
    <div style={{ width: '50%' }}>
      <h1>Text Area</h1>
      <div>
        <p>
          Simple Text Area with a <strong>placeholder</strong>
        </p>
        <TextArea placeholder="Type something"></TextArea>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Area with a <strong>change handler</strong> logging in the
          browser console
        </p>
        <TextArea placeholder="Type something" onChange={logChange}></TextArea>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Area with a <strong>label</strong>
        </p>
        <p>
          {' '}
          If the attribute id is defined, it will be attached to the label as a
          &apos;for&apos; attribute.
        </p>
        <TextArea
          id="input-1234567890"
          label="Lorem Ipsum"
          placeholder="Type something"
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Area with a <strong>tooltip</strong>
        </p>
        <TextArea
          tooltip="More information"
          tooltipCloseLabel="Got it"
          placeholder="Type something"
        ></TextArea>
      </div>
      <hr />
      <div>
        <p>
          Simple Text Area with a <strong>label</strong> and a{' '}
          <strong>tooltip</strong>
        </p>
        <TextArea
          label="Lorem Ipsum"
          tooltip="More information"
          tooltipCloseLabel="Got it"
          placeholder="Type something"
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
  component: TextArea,
  decorators: [withKnobs],
};
