import { withKnobs, button } from '@storybook/addon-knobs';
import React, { useRef, useState } from 'react';
import { TextArea, Validation } from '../src/components';
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
          Simple Text Area with a <strong>required label</strong>
        </p>
        <p>
          {' '}
          If the attribute showRequired is defined, the according style will be applied
        </p>
        <TextArea
          id="input-1234567899"
          label="Lorem Ipsum"
          placeholder="Type something"
          showRequired
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
  const child = useRef(null);

  const [value, setValue] = useState('');

  const reset = () => child.current.reset();
  
  const refresh = () =>
    child.current
      .refreshValidation()
      .then((isValid) => console.log(isValid));
  button('Reset', reset);
  button('Refresh validation', refresh);

  return (
    <div style={{ width: '50%' }}>
      <p>Manipulate programmatically: Use knobs</p>
      <Validation
        ref={child}
        validator={Validators.MinLength(3)}
        errorMessage={'You need to enter 3 characters minimum'}
      >
        <TextArea
          placeholder="Firstname"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></TextArea>
      </Validation>
    </div>
  );
};

export default {
  title: 'Components/Input/TextArea',
  component: TextArea,
  decorators: [withKnobs],
};
