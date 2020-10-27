import React from 'react';
import { DatePicker, TextField } from '../src/components';

const Template = (args) => {
  return <DatePicker {...args} />;
};

export const Default = Template.bind({});

export const MoreExamples: React.SFC = () => {
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
        <DatePicker format="dd/MM/yyyy" />
        <br />
        <DatePicker format="MMM, dd yyyy" />
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
        />
        <br />
        <DatePicker
          format="yyyy年MM月dd日"
          locale="ja"
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
        <DatePicker
          todayButton="Aujourd'hui"
          locale="fr"
          labels={{
            previousYear: 'Année Précédente',
            previousMonth: 'Mois Précédent',
            nextYear: 'Anné Précédente',
            nextMonth: 'Mois Précédent',
          }}
        />
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
  component: DatePicker,
  subcomponents: { TextField },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
