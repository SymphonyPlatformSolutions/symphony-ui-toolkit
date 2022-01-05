import React, { useState, useRef } from 'react';
import { Button, TextField, Icon, Validation, Typography } from '../src/components';

import { Validators } from '../src/core/validators/validators';

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Field label',
  tooltip: 'This is a tooltip \n  with newline',
  tooltipCloseLabel: 'Got it',
  placeholder:'Type something',
};

export const ChangeProgrammatically = () => {
  const child1 = useRef(null);
  const child2 = useRef(null);

  const [value, setValue] = useState('');

  const reset = () => {
    child1.current.reset();
    child2.current.reset();
  }
  const refresh = () => {
    child1.current.refreshValidation().then((isValid) => console.log(isValid));
    child2.current.refreshValidation().then((isValid) => console.log(isValid));
  }
  return (
    <>
      <Validation
        ref={child1}
        validator={Validators.Required}
        errorMessage={{ required: 'This field is mandatory' }}
      >
        <TextField
          label="Field label"
          placeholder="Type something"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Validation>
      <div className="tk-mt-2">
        <Validation
          ref={child2}
          validator={Validators.Required}
          errorMessage={{ required: 'This field is mandatory' }}
        >
          <TextField
            label="Field label"
            placeholder="Type something"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            size="small"
          />
        </Validation>
      </div>
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <Button size="small" onClick={reset} className="tk-mr-2">Reset</Button>
        <Button size="small" onClick={refresh}>Refresh validation</Button>
      </div>
    </>
  );
};

export const Disabled: React.FC = () => 
  <>
    <p>Text Field <b>disabled</b>. A disabled input element is unusable and un-clickable.</p>
    <TextField
      disabled
      label="Field label"
      placeholder="Type something"
      tooltip="More information"
      tooltipCloseLabel="Got it"
    />
  </>;

export const HelperText: React.FC = () => 
  <>
    <TextField
      id="input-1234567899"
      helperText="Helper text"
      placeholder="Type something"
      label="Field label"
    />
  </>;

export const InitialValue: React.FC = () => {
  const [value, setValue] = useState('Lorem Ipsum');
  return (
    <>
      <TextField
        label="Field label"
        placeholder="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const Label: React.FC = () =>
  <>
    <p>If the attribute id is defined, it will be attached to the label as a
&apos;for&apos; attribute.
    </p>
    <TextField
      id="input-1234567890"
      label="Field label"
      placeholder="Type something"
    />

    <p>With a <b>label required</b></p>
    <p> If the attribute showRequired is defined, the according style will be applied</p>
    <TextField
      id="input-1234567899"
      label="Field label"
      placeholder="Type something"
      showRequired
    />
  </>;

export const ReadOnly: React.FC = () => 
  <>
    <p>Text Field <b>read only</b>. 
      A read-only input field cannot be modified (however, a user can tab to it, highlight it, and copy the text from it).
    </p>
    <TextField
      label="Field label"
      tooltip="More information"
      tooltipCloseLabel="Got it"
      readOnly
      value="Lorem Ipsum"
    />
    <div className="tk-mt-1"/>
    <TextField
      label="Field label"
      tooltip="More information"
      tooltipCloseLabel="Got it"
      readOnly
      size="small"
      value="Lorem Ipsum"
    />
  </>;

export const RightDecorator: React.FC = () => {
  const [hideText, setHideText] = useState(false);
  const [value, setValue] = useState('Lorem Ipsum');
  const [value1, setValue1] = useState('Lorem Ipsum');
  const [value2, setValue2] = useState('Lorem Ipsum');
  return (
    <>
      <p>Adding the class <b>.tk-input__right-decorators__clickable </b>
        will provide a clickable style to the decorator</p>
      <TextField
        label="Field label"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rightDecorators={<Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable"/>}
      />
      <p>Text Field with 2 <b>right decorators</b></p>
      <TextField
        label="Field label"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        rightDecorators={
        value1?.length
          && [
            <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>,
            <Icon iconName="search" tabIndex={0} className="tk-input__right-decorators__clickable" key="search"/>,
          ]
        }
      />
      <p>Adding the class <b>.tk-input__hide</b> and <b> masked data</b></p>
      <TextField
        label="Field label"
        isMasked={hideText}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        rightDecorators={
        value?.length
          && [
            <button
              key="button"
              role="button"
              className="tk-input__hide"
              tabIndex={value && value.length === 0 ? -1 : 0}
              onClick={() => setHideText(!hideText)}
            >
              {hideText ? 'SHOW' : 'HIDE'}
            </button>,
          ]
        }
      />
    </>)
};

export const Sizes: React.FC = () => {
  return (
    <>
      <Typography type="h1">Small</Typography>
      <div className="flex-row">
        <div className="flex-col" style={{width:'350px'}}>
          <TextField size="small" 
            label="Field label" 
            placeholder="Type something"
          />
        </div>
        <div className="flex-col" style={{width:'350px'}}>
          <TextField size="small" 
            label="Field label" 
            placeholder="Type something"
            rightDecorators={[
              <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>,
              <Icon iconName="search" tabIndex={0} className="tk-input__right-decorators__clickable" key="search"/>,
            ]}
          />
        </div>
      </div>
      <Typography type="h1" className="tk-mt-4h">Medium</Typography>
      <div className="flex-row">
        <div className="flex-col" style={{width:'350px'}}>
          <TextField size="medium" 
            label="Field label" 
            placeholder="Type something"
          />
        </div>
        <div className="flex-col" style={{width:'350px'}}>
          <TextField size="medium" 
            label="Field label" 
            placeholder="Type something"
            rightDecorators={[
              <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>,
              <Icon iconName="search" tabIndex={0} className="tk-input__right-decorators__clickable" key="search"/>,
            ]}
          />
        </div>
      </div>
    </>)
};

export const Tooltip: React.FC = () => 
  <>
    <TextField
      label="Field label"
      tooltip="More information"
      tooltipCloseLabel="Got it"
      placeholder="Type something"
    />
  </>;

export const WithIcon: React.FC = () =>
  <>
    <TextField
      placeholder="Type something"
      label="Field label"
      iconElement={
        <Icon
          iconName={'calendar'}
          tabIndex={0}
        />
      }
    />
  </>;

export default {
  title: 'Components/Input/TextField',
  component: TextField,
};
