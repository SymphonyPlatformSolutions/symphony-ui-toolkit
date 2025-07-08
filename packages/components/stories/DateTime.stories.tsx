/* eslint-disable react/display-name */
import '../src/styles';
import './stories.css';

import type { Meta, StoryObj } from '@storybook/react';
import { DateTime } from '../src/components/date-time/DateTime';
import { DateTimeFormat } from '../src/components/date-time/interfaces';

const meta: Meta<typeof DateTime> = {
  component: DateTime,
  title: 'Components/DateTime',
  args: {
    date: new Date(2024, 11, 30, 17, 30, 15).toISOString(),
  },
  argTypes: {
    date: {
      control: 'text',
    },
    format: {
      control: { type: 'select' },
      options: Object.values(DateTimeFormat),
    },
    locale: {
      control: { type: 'select' },
      options: [undefined, 'en-US', 'fr-FR', 'ja-JP'],
    },
    show12HourTime: {
      control: { type: 'select' },
      options: [undefined, true, false],
    },
    dateFormat: {
      control: { type: 'select' },
      options: [
        undefined,
        'MM/dd/yyyy',
        'dd/MM/yyyy',
        'yyyy/MM/dd',
        'dd-MM-yyyy',
      ],
    },
    timeFormat: {
      control: { type: 'select' },
      options: [undefined, 'hh:mm a', 'HH:mm', 'HH:mm:ss'],
    },
  },
} satisfies Meta<typeof DateTime>;

export default meta;
type Story = StoryObj<typeof DateTime>;

export const Default: Story = {
  args: {},
};

export const FormatDateTime: Story = {
  name: 'Date and Time',
  args: {
    format: DateTimeFormat.DATE_TIME,
  },
};

export const FormatDateOnly: Story = {
  name: 'Date',
  args: {
    format: DateTimeFormat.DATE,
  },
};

export const FormatTime: Story = {
  name: 'Time',
  args: {
    format: DateTimeFormat.TIME,
  },
};

export const FormatTimeWithSeconds: Story = {
  name: 'Time with Seconds',
  args: {
    format: DateTimeFormat.TIME_SECS,
  },
};

export const InvalidDateInput: Story = {
  name: 'Invalid Date String',
  args: {
    date: 'this-is-not-a-valid-date-string',
    format: DateTimeFormat.DATE_TIME,
  },
};

export const EnglishLocale: Story = {
  name: 'English Locale',
  args: {
    locale: 'en-US',
  },
};

export const FrenchLocale: Story = {
  name: 'French Locale',
  args: {
    locale: 'fr-FR',
  },
};

export const JapaneseLocale: Story = {
  name: 'Japanese Locale',
  args: {
    locale: 'ja-JP',
  },
};
