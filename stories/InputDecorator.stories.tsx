import React from 'react';
import { Icon, InputDecorator } from '../src/components';

export default {
  title: 'Components/Input/InputDecorator',
  component: InputDecorator,
  decorators: [
    (Story) => (
      <div
        style={{ maxWidth: '50%', margin: '150px auto', textAlign: 'center' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {},
  children: { control: { disable: true } },
};

const Template = (args) => {
  return (
    <InputDecorator
      label={args.description}
      tooltip="A tooltip"
      rightDecorators={args.rightDecorators}
    >
      {args.children}
    </InputDecorator>
  );
};

export const Standard = Template.bind({});
Standard.args = {
  description: 'Input Type "text"',
  rightDecorators: [
    <span
      key="span-copy"
      style={{ alignSelf: 'center', margin: '0.2rem 0.5rem' }}
    >
      <Icon iconName="copy" />
    </span>,
    <span
      key="span-search"
      style={{ alignSelf: 'center', margin: '0.2rem 0.5rem' }}
    >
      <Icon iconName="search" />
    </span>,
  ],
  children: <input type="text" />,
};

export const Color = Template.bind({});
Color.args = {
  description: 'Input Type "color"',
  children: <input style={{ width: '200px' }} type="color" />,
};

export const Number = Template.bind({});
Number.args = {
  description: 'Input Type "number"',
  children: <input type="number" />,
  rightDecorators:
    <span
      key="span-copy"
      style={{ alignSelf: 'center', margin: '0.2rem 0.5rem' }}
    >
      <Icon iconName="copy" />
    </span>
};

export const Range = Template.bind({});
Range.args = {
  description: 'Input Type "range"',
  children: <input style={{ width: '300px' }} type="range" />,
};

export const DateTimeLocal = Template.bind({});
DateTimeLocal.args = {
  description: 'Input Type "datetime-local"',
  children: <input type="datetime-local" />,
};

export const Url = Template.bind({});
Url.args = {
  description: 'Input Type "url"',
  children: <input type="url" />,
};

export const Email = Template.bind({});
Email.args = {
  description: 'Input Type "email"',
  children: <input type="email" />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  description: 'Input disabled',
  children: <input type="text" disabled />,
};

export const Password = Template.bind({});
Password.args = {
  description: 'Input type "password"',
  children: <input type="password" />,
};
