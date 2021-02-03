import * as React from 'react';
import TimePicker from '../src/components/time-picker';
import './styles/dropdownMenu.stories.css';

const Template = (args) => {
  return (
    <div className="flex-col" style={{ width: '100%', height: '500px' }}>
      <TimePicker {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'test',
  min: '09:00:00',
  max: '12:00:00',
  value: '09:30:00',
  disabledTimes: [{ from: '10:00:00', to: '11:00:00' }, { time: '09:15:00' }],
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Select your time',
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: '09:30:00',
};

export const WithFormat = Template.bind({});
WithFormat.args = {
  value: 'hh:mm a',
};

export const WithStrict = Template.bind({});
WithValue.args = {
  strict: true,
};

export const WithStep = Template.bind({});
WithStep.args = {
  step: 600,
};

export const DisabledTimes = Template.bind({});
DisabledTimes.args = {
  disabledTimes: [
    { from: '02:00:00', to: '05:00:00' },
    { time: '09:15:00' },
    { time: '09:30:00' },
    { from: '13:30:00', to: '15:45:00' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithFormat = Template.bind({});
WithFormat.args = {
  format: 'hh:mm:ss a',
};

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
};
