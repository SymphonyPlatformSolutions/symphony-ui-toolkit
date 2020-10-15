import React from 'react';
import { DatePicker } from '../src/components';

export const DatePickers: React.SFC = () => {
  const now = new Date();
  const disabledDays = [
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
    {
      before: new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()),
    },
    {
      after: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()),
    },
    {
      after: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 15),
      before: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 20),
    },
  ];

  const disabledWeekends = [{ daysOfWeek: [0, 6] }];

  return (
    <div className="tk-text-color" style={{ minHeight: '500px' }}>
      <div>
        <h2>Default</h2>
        <DatePicker todayButton="today"></DatePicker>
      </div>
      <div>
        <h2>Initially open</h2>
        <DatePicker todayButton="today" showOverlay={true}></DatePicker>
      </div>
      <div>
        <h2>With value</h2>
        <DatePicker todayButton="today" date={new Date()}></DatePicker>
      </div>
      <div>
        <h2>Using locale</h2>
        <DatePicker todayButton="today" locale="fr"></DatePicker>
      </div>
      <div>
        <h2>Disabling days</h2>
        <DatePicker
          todayButton="today"
          disabledDays={disabledDays}
        ></DatePicker>
        <DatePicker
          todayButton="today"
          disabledDays={disabledWeekends}
        ></DatePicker>
      </div>
      <div>
        <h2>Using label and tooltip</h2>
        <DatePicker
          todayButton="today"
          tooltip="Depart date"
          label="Expense"
        ></DatePicker>
      </div>
      <div>
        <h2>Disabled</h2>
        <DatePicker todayButton="today" disabled={true}></DatePicker>
      </div>
    </div>
  );
};

export default {
  title: 'DatePicker',
};
