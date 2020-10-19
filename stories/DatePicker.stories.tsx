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

  const disabledWednesday = [{ daysOfWeek: [3] }];

  return (
    <div className="tk-text-color" style={{ minHeight: '500px' }}>
      <h1>Date Picker</h1>
      <div>
        <p>Default Date Picker</p>
        <DatePicker todayButton="today"/>
      </div>
      <hr />
      <div style={{marginBottom: '300px'}}>
        <p>
          Date Picker initially <strong>open</strong>
        </p>
        <DatePicker todayButton="today" showOverlay={true}/>
      </div>
      <hr />
      <div>
        <p>
          Date Picker with <strong>initial value</strong>
        </p>
        <DatePicker todayButton="today" date={new Date()}/>
      </div>
      <hr />
      <div>
        <p>
          Date Picker with specific <strong>format</strong>
        </p>
        <DatePicker todayButton="today" format="dd/MM/yyyy"/>
      </div>
      <hr />
      <div>
        <p>
          Date Picker opening on specific <strong>initial month</strong>
        </p>
        <DatePicker
          todayButton="today"
          initialMonth={new Date(now.getFullYear(), now.getMonth() + 2, now.getDate())}
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker opening on specific <strong>placement</strong> (top) by default
        </p>
        <DatePicker
          todayButton="today"
          placement="top"
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker using <strong>locale</strong> (french)
        </p>
        <DatePicker todayButton="today" locale="fr"/>
        <p>
          Date Picker using <strong>locale</strong> (arabic) and <strong>right-to-left</strong>
        </p>
        <DatePicker todayButton="today" locale="ar-DZ" dir="rtl"/>
      </div>
      <hr />
      <div>
        <p>
          Date Picker with <strong>disabled days</strong> (date, before, after,
          and intervals)
        </p>
        <DatePicker
          todayButton="today"
          disabledDays={disabledDays}
        />
        <p>
          Date Picker with <strong>every Wednesday</strong> disabled
          (daysOfWeek)
        </p>
        <DatePicker
          todayButton="today"
          disabledDays={disabledWednesday}
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker using <strong>label</strong> and <strong>tooltip</strong>
        </p>
        <DatePicker
          todayButton="today"
          tooltip="Depart date"
          label="Expense"
        />
      </div>
      <hr />
      <div>
        <p>Disabled</p>
        <DatePicker todayButton="today" disabled={true}/>
      </div>
    </div>
  );
};

export default {
  title: 'DatePicker',
};
