import React from 'react';
import { Input, Icon } from '../src/components';

export default {
  title: 'Components/Input/Input',
  component: Input,
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
  return <Input label="A label" tooltip="A tooltip" {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  description: 'Input Type "text"',
  type: 'text',
  rightDecorators: [
    <span
      key="span-copy"
      style={{ alignSelf: 'center', margin: '0.2rem 0.5rem' }}
    >
      <Icon iconName="copy"></Icon>
    </span>,
    <span
      key="span-search"
      style={{ alignSelf: 'center', margin: '0.2rem 0.5rem' }}
    >
      <Icon iconName="search"></Icon>
    </span>,
  ],
};

export const Color = Template.bind({});
Color.args = {
  description: 'Input Type "color"',
  type: 'color',
};

export const Number = Template.bind({});
Number.args = {
  description: 'Input Type "number"',
  type: 'number',
};

export const Range = Template.bind({});
Range.args = {
  description: 'Input Type "range"',
  type: 'range',
};

export const DateTimeLocal = Template.bind({});
DateTimeLocal.args = {
  description: 'Input Type "datetime-local"',
  type: 'datetime-local',
};

export const Url = Template.bind({});
Url.args = {
  description: 'Input Type "url"',
  type: 'url',
};

export const Email = Template.bind({});
Email.args = {
  description: 'Input Type "email"',
  type: 'email',
};

export const Disabled = Template.bind({});
Disabled.args = {
  description: 'Input disabled',
  type: 'text',
  disabled: 'disabled',
};

export const Password = Template.bind({});
Password.args = {
  description: 'Input type "password"',
  type: 'password',
};
