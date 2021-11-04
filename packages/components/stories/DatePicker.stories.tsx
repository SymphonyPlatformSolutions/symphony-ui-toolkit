import React, { useState } from 'react';
import {
  DatePicker,
  TextField,
  Icon,
  Link,
  Button,
  Validation,
} from '../src/components';

import { PortalTemplate } from './templates';

const now = new Date();
const logChange = (value, errorsMap) => {
  if (!value) {
    console.log('Component is valid:', value);
  }
  if (errorsMap) {
    console.log('Errors Map:', errorsMap);
  }
};

const Template = (args) => {
  const [date, setDate] = useState(null);
  const [pickerElement, setPickerElement] = useState(null);

  return (
    <div>
      <DatePicker
        {...args}
        date={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        ref={setPickerElement}
      />
      <br />
      <Button onClick={() => pickerElement.reset(null)} variant="tertiary">
        Reset value
      </Button>
    </div>
  );
};

export const Default = Template.bind({});

export const InitialValue: React.SFC = () => {
  const [date, setDate] = useState(new Date());
  return (
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
  );
};

export const InitiallyOpen: React.SFC = () => {
  const [date, setDate] = useState(null);
  return (
    <div>
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
  );
};

export const InitialMonth: React.SFC = () => {
  const [date, setDate] = useState(null);

  return (
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
  );
};

export const CustomFormat: React.SFC = () => {
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [date3, setDate3] = useState(null);
  const [date4, setDate4] = useState(null);
  return (
    <div>
      <p>
        Date Picker with specific <strong>format</strong>
      </p>
      <DatePicker
        format="dd/MM/yyyy"
        date={date1}
        onChange={(e) => {
          setDate1(e.target.value);
        }}
      />
      <br />
      <DatePicker
        format="MMM, dd yyyy"
        date={date2}
        onChange={(e) => {
          setDate2(e.target.value);
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
        date={date3}
        onChange={(e) => {
          setDate3(e.target.value);
        }}
      />
      <br />
      <DatePicker
        format="yyyy年MM月dd日"
        locale="ja"
        todayButton="今日"
        date={date4}
        onChange={(e) => {
          setDate4(e.target.value);
        }}
      />
      <p>
        Please see following guidelines{' '}
        <Link
          url={
            'https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table'
          }
        >
          {' '}
          based on Unicode Technical Standard
        </Link>
      </p>
    </div>
  );
};

export const CustomPlacement: React.SFC = () => {
  const [date, setDate] = useState(null);
  return (
    <div style={{ marginTop: '300px' }}>
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
  );
};
export const CustomLocale: React.SFC = () => {
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  return (
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
        date={date1}
        onChange={(e) => {
          setDate1(e.target.value);
        }}
      />
      <p>
        Date Picker using <strong>locale</strong> (arabic) and{' '}
        <strong>right-to-left</strong>
      </p>
      <DatePicker
        locale="ar-DZ"
        dir="rtl"
        date={date2}
        onChange={(e) => {
          setDate2(e.target.value);
        }}
      />
    </div>
  );
};
export const WithDisabledDate: React.SFC = () => {
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);

  const [pickerElement, setPickerElement] = useState(null);

  const disabledDays = [
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2),
    {
      before: new Date(now.getFullYear(), now.getMonth() - 1, now.getDate() + 5),
    },
    {
      after: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate() + 5),
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

  const disabledWednesday = [{ daysOfWeek: [3] }]; // Sunday 0, Monday 1, ... Saturday 6
  return (
    <div>
      <p>
        Date Picker with <strong>disabled days</strong> (date, before, after,
        and intervals)
      </p>
      <Validation onValidationChanged={logChange}>
        <DatePicker
          disabledDays={disabledDays}
          date={date1}
          onChange={(e) => {
            setDate1(e.target.value);
          }}
          ref={setPickerElement}
        />
      </Validation>

      <Button onClick={() => pickerElement.reset(null)} variant="tertiary">
        Reset value
      </Button>
      <br />
      <p>
        Date Picker with <strong>every Wednesday</strong> disabled (daysOfWeek)
      </p>
      <Validation onValidationChanged={logChange}>
        <DatePicker
          disabledDays={disabledWednesday}
          date={date2}
          onChange={(e) => {
            setDate2(e.target.value);
          }}
        />
      </Validation>
      <p>Note: To be able to display the error message, the Date Picker need to be wrapped by a <strong>Validation</strong> component. </p>
    </div>
  );
};

export const WithValidationComponent: React.SFC = () => {
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);

  const [pickerElement, setPickerElement] = useState(null);

  const disabledDays = [
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2),
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

  return (
    <div>
      <p>The DatePicker component own an internal validation. To be able to display the error message, the Date Picker need to be wrapped by a <strong>Validation</strong> component. 
      </p>
      <Validation
        onValidationChanged={logChange}
      >
        <DatePicker
          disabledDays={disabledDays}
          date={date1}
          onChange={(e) => {
            setDate1(e.target.value);
          }}
          ref={setPickerElement}
        />
      </Validation>

      <Button onClick={() => pickerElement.reset(null)} variant="tertiary">
        Reset value
      </Button>

      <p>The following error message can be customised: <strong>format, disabledDate, maxDate, minDate.</strong></p>
      <Validation
        onValidationChanged={logChange}
        errorMessage={{
          format: 'Le format est incorrect',
          disabledDate: 'La date n\'est pas disponible',
          maxDate: 'La date est ...',
          minDate: 'La date est trop ancienne',
        }}
      >
        <DatePicker
          disabledDays={disabledDays}
          date={date2}
          onChange={(e) => {
            setDate2(e.target.value);
          }}
        />
      </Validation>
    </div>
  );
};

export const WithHighlightedDate: React.SFC = () => {
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);

  const highlightedDays = [
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2),
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

  const highlightedWednesday = [{ daysOfWeek: [3] }]; // Sunday 0, Monday 1, ... Saturday 6
  return (
    <div>
      <p>
        Date Picker with <strong>highlighted days</strong> (date, before, after,
        and intervals)
      </p>
      <DatePicker
        highlightedDays={highlightedDays}
        date={date1}
        onChange={(e) => {
          setDate1(e.target.value);
        }}
      />
      <p>
        Date Picker with <strong>every Wednesday</strong> highlighted
        (daysOfWeek)
      </p>
      <DatePicker
        highlightedDays={highlightedWednesday}
        date={date2}
        onChange={(e) => {
          setDate2(e.target.value);
        }}
      />
    </div>
  );
};

export const WithLabelAndTooltip: React.SFC = () => {
  const [date, setDate] = useState(null);

  return (
    <div>
      <p>
        Date Picker using <strong>label</strong> and <strong>tooltip</strong>
      </p>
      <DatePicker
        tooltip="Departure date"
        tooltipCloseLabel="Got it"
        label="Expense"
        date={date}
        id={'date-picker-unique'}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </div>
  );
};

export const WithRequiredLabel: React.SFC = () => {
  const [date, setDate] = useState(null);

  return (
    <div>
      <p>
        Date Picker using <strong>label required</strong>
      </p>
      <DatePicker
        label="Expense"
        showRequired
        date={date}
        id={'date-picker-unique'}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </div>
  );
};

export const DisabledState: React.SFC = () => {
  const [date, setDate] = useState(null);

  return (
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
  );
};

export const Portal = PortalTemplate.bind({});
Portal.args = {
  title: 'Date Picker rendering its content inside a Portal',
  component: <DatePicker
    menuPortalTarget={document.body}
    menuShouldBlockScroll={true}
    showOverlay={true}
    menuPortalStyles={{ zIndex: 100 }} />,
};

export default {
  title: 'Components/Input/DatePicker',
  component: DatePicker,
  subcomponents: { TextField, Icon },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '340px' }}>
        <Story />
      </div>
    ),
  ],
};
