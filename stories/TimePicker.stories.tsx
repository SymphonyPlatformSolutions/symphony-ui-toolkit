import * as React from 'react';
import TimePicker from '../src/components/time-picker';
import './styles/dropdownMenu.stories.css';

const Default: React.FC = () => {
  return (
    <div className="flex-col" style={{ width: '100%', height: '500px' }}>
      <h3>Default</h3>
      <TimePicker
        name="test"
        min={'09:00:00'}
        max={'12:00:00'}
        value={'09:30:00'}
        disabledTimes={[
          { from: '10:00:00', to: '11:00:00' },
          { time: '09:15:00' },
        ]}
      />
    </div>
  );
};

export const TimePickerList: React.FC = () => {
  return (
    <div className="flex-row">
      <Default />
    </div>
  );
};

export default {
  title: 'Components/TimePicker',
  component: TimePickerList,
};
