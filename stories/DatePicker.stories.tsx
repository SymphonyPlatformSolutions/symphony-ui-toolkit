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
    <>
      <div className="tk-text-color">
        <h2>Default</h2>
        <DatePicker todayButton="today"></DatePicker>
      </div>
      <div className="tk-text-color">
        <h2>With value</h2>
        <DatePicker todayButton="today" date={new Date()} showOverlay={true}></DatePicker>
      </div>
      <div className="tk-text-color">
        <h2>Using locale</h2>
        <DatePicker todayButton="today" locale="fr" showOverlay={true}></DatePicker>
      </div>
      <div className="tk-text-color">
        <h2>Disabling days</h2>
        <DatePicker
          todayButton="today"
          locale="fr"
          disabledDays={disabledDays}
          showOverlay={true}
        ></DatePicker>
        <DatePicker
          todayButton="today"
          locale="fr"
          disabledDays={disabledWeekends}
          showOverlay={true}
        ></DatePicker>
      </div>
    </>
  );
};

export default {
  title: 'DatePicker',
};
