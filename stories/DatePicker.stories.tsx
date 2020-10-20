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
        <DatePicker />
      </div>
      <hr />
      <div style={{ marginBottom: '300px' }}>
        <p>
          Date Picker initially <strong>open</strong>
        </p>
        <DatePicker showOverlay={true} />
      </div>
      <hr />
      <div>
        <p>
          Date Picker with <strong>initial value</strong>
        </p>
        <DatePicker date={new Date()} />
      </div>
      <hr />
      <div>
        <p>
          Date Picker with specific <strong>format</strong>
        </p>
        <DatePicker format="dd/MM/yyyy"/>
        <br/>
        <DatePicker format="MMM, dd yyyy" />
        <br/>
        <DatePicker format="dd MMMM yyyy" locale="it"/>
      </div>
      <hr />
      <div>
        <p>
          Date Picker opening on specific <strong>initial month</strong>
        </p>
        <DatePicker
          initialMonth={
            new Date(now.getFullYear(), now.getMonth() + 2, now.getDate())
          }
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker opening on specific <strong>placement</strong> (top) by
          default
        </p>
        <DatePicker placement="top" />
      </div>
      <hr />
      <div>
        <p>
          Date Picker using <strong>locale</strong> (french)
        </p>
        <DatePicker todayButton="Aujourd'hui" locale="fr" />
        <p>
          Date Picker using <strong>locale</strong> (arabic) and{' '}
          <strong>right-to-left</strong>
        </p>
        <DatePicker locale="ar-DZ" dir="rtl" />
      </div>
      <hr />
      <div>
        <p>
          Date Picker with <strong>disabled days</strong> (date, before, after,
          and intervals)
        </p>
        <DatePicker disabledDays={disabledDays} />
        <p>
          Date Picker with <strong>every Wednesday</strong> disabled
          (daysOfWeek)
        </p>
        <DatePicker disabledDays={disabledWednesday} />
      </div>
      <hr />
      <div>
        <p>
          Date Picker using <strong>label</strong> and <strong>tooltip</strong>
        </p>
        <DatePicker tooltip="Departure date" label="Expense" />
      </div>
      <hr />
      <div>
        <p>Disabled</p>
        <DatePicker disabled={true} />
      </div>
    </div>
  );
};

export default {
  title: 'DatePicker',
};
