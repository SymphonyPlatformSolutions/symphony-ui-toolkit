import React, { useState } from 'react';
import { DatePicker, TextField, Icon } from '../src/components';

const Template = (args) => {
  const [date, setDate] = useState(null);

  return (
    <DatePicker
      {...args}
      date={date}
      onChange={(e) => {
        setDate(e.target.value);
      }}
    />
  );
};

export const Default = Template.bind({});

export const MoreExamples: React.SFC = () => {
  const [date, setDate] = useState(new Date());
  const now = new Date();
  const [pickerElement, setPickerElement] = useState(null);

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
    {
      from: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 22),
      to: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 24),
    },
  ];

  const disabledWednesday = [{ daysOfWeek: [3] }];

  return (
    <div>
      <h1>Date Picker</h1>
      <div>
        <p>Default Date Picker</p>
        <DatePicker
          ref={setPickerElement}
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br/>
        <button onClick={() => pickerElement.reset(null)}>Reset value</button>
        </div>
      <hr />
      <div style={{ marginBottom: '300px' }}>
        <p>
          Date Picker initially <strong>open</strong>
        </p>
        <DatePicker
          showOverlay={true}
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker with <strong>initial value</strong>
        </p>
        <DatePicker
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker with specific <strong>format</strong>
        </p>
        <DatePicker
          format="dd/MM/yyyy"
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <DatePicker
          format="MMM, dd yyyy"
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <DatePicker
          format="dd MMMM yyyy"
          locale="it"
          labels={{
            previousYear: 'Anno Prossimo',
            previousMonth: 'Mese Prossimo',
            nextYear: 'Anno Scorso',
            nextMonth: 'Mese Scorso',
          }}
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <DatePicker
          format="yyyy年MM月dd日"
          locale="ja"
          todayButton="今日"
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
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
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker opening on specific <strong>placement</strong> (top) by
          default
        </p>
        <DatePicker
          placement="top"
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker using <strong>locale</strong> (french)
        </p>
        <DatePicker
          todayButton="Aujourd'hui"
          locale="fr"
          labels={{
            previousYear: 'Année Précédente',
            previousMonth: 'Mois Précédent',
            nextYear: 'Anné Précédente',
            nextMonth: 'Mois Précédent',
          }}
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <p>
          Date Picker using <strong>locale</strong> (arabic) and{' '}
          <strong>right-to-left</strong>
        </p>
        <DatePicker
          locale="ar-DZ"
          dir="rtl"
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker with <strong>disabled days</strong> (date, before, after,
          and intervals)
        </p>
        <DatePicker
          disabledDays={disabledDays}
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <p>
          Date Picker with <strong>every Wednesday</strong> disabled
          (daysOfWeek)
        </p>
        <DatePicker
          disabledDays={disabledWednesday}
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <hr />
      <div>
        <p>
          Date Picker using <strong>label</strong> and <strong>tooltip</strong>
        </p>
        <DatePicker
          tooltip="Departure date"
          label="Expense"
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <hr />
      <div>
        <p>Disabled</p>
        <DatePicker
          disabled={true}
          date={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default {
  title: 'DatePicker',
  component: DatePicker,
  subcomponents: { TextField, Icon },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
