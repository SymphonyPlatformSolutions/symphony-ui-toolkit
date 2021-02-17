import * as React from 'react';
import { useState } from 'react';
import { Button, Validation } from '../src';
import { TimePicker } from '../src/components';
import './styles/dropdownMenu.stories.css';

const logChange = (value, errorsMap) => {
  if (!value) {
    console.log('Component is valid:', value);
  }
  if (errorsMap) {
    console.log('Errors Map:', errorsMap);
  }
};

const Template = (args) => {
  return (
    <div className="flex-col" style={{ width: '100%', height: '350px' }}>
      <TimePicker {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'timePickerId',
  label: 'timePickerLabel',
  name: 'timePickerName',
  min: '08:00:00',
  max: '19:00:00',
  step: 900,
  value: '09:30:00',
  format: 'hh:mm a',
  strict: false,
  placeholder: 'Select a value',
  disabledTimes: [{ from: '10:00:00', to: '10:15:00' }, { time: '09:15:00' }],
  onChange: (value) => console.log(value),
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Select your time',
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: '09:30:00',
};

export const WithStrict = Template.bind({});
WithStrict.args = {
  strict: true,
};

export const WithStep = Template.bind({});
WithStep.args = {
  step: 600,
};

export const DisabledTimes = Template.bind({});
DisabledTimes.args = {
  min: '08:00:00',
  max: '19:00:00',
  value: '09:30:00',
  disabledTimes: [
    { from: '10:00:00', to: '11:00:00' },
    { time: '15:00:00' },
    { time: '16:30:00' },
    { from: '17:30:00', to: '18:00:00' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithFormat = Template.bind({});
WithFormat.args = {
  format: 'hh:mm:ss a',
  min: '05:00:00',
  value: '07:30:00',
  disabledTimes: [
    { from: '06:00:00', to: '06:30:00' },
    { time: '09:15:00' },
    { time: '09:30:00' },
    { from: '13:30:00', to: '15:45:00' },
  ],
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  format: 'hh:mm a',
  onChange: (value) => console.log(value),
};

export const WithValidationComponent: React.SFC = () => {
  const [time1, setTime1] = useState('01:00:00');
  const [time2, setTime2] = useState('');

  const disabledTimes = [
    { time: '09:00:00' },
    {
      from: '10::00:00',
      to: '12:30:00',
    },
    {
      from: '16:30:00',
      to: '17:00:00',
    },
  ];

  return (
    <div>
      <p>
        The TimePicker component own an internal validation. To be able to
        display the error message, the Time Picker need to be wrapped by a{' '}
        <strong>Validation</strong> component.
      </p>
      <Validation onValidationChanged={logChange}>
        <TimePicker
          disabledTimes={disabledTimes}
          value={time1}
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              setTime1(value);
            }
          }}
        />
      </Validation>

      <Button onClick={() => setTime1('01:00:00')} variant="tertiary">
        Reset value
      </Button>

      <p>
        The following error message can be customised:{' '}
        <strong>format, disabledTime, maxTime, minTime.</strong>
      </p>
      <Validation
        onValidationChanged={logChange}
        errorMessage={{
          format: 'Le format est incorrect',
          disabledTime: 'L\'heure n\'est pas disponible',
          maxTime: 'L\'heure est trop tard',
          minTime: 'L\'heure est trop trop',
        }}
      >
        <TimePicker
          min={'08:00:00'}
          max={'20:00:00'}
          disabledTimes={disabledTimes}
          value={time2}
          onChange={(e) => {
            const value = e.target.value;
            setTime2(value);
          }}
        />
      </Validation>
    </div>
  );
};

export default {
  title: 'Components/Input/TimePicker',
  component: TimePicker,
};
