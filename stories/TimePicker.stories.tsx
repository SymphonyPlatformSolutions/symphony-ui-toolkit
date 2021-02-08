import * as React from 'react';
import TimePicker from '../src/components/time-picker';
import './styles/dropdownMenu.stories.css';

const Template = (args) => {
  return (
    <div className="flex-col" style={{ width: '100%', height: '350px' }}>
      <TimePicker {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
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

// export const Default = Template.bind({});
// Default.args = {
//   name: 'test',
//   min: '08:00:00',
//   max: '19:00:00',
//   value: '09:30:00',
//   format: 'hh:mm a',
//   disabledTimes: [{ from: '10:00:00', to: '10:15:00' }, { time: '09:15:00' }],
// };

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

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
};
