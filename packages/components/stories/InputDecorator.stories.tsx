/* eslint-disable react/display-name */
import '../src/styles';
import './stories.css';

import * as React from 'react';
import { Icon, InputDecorator } from '../src/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputDecorator> = {
  args: {
    children: <input type="text" />,
    label: 'Input Type "text"',
    rightDecorators: [
      <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>,
      <Icon iconName="search" tabIndex={0} className="tk-input__right-decorators__clickable" key="search"/>,
    ],
    tooltip: 'A tooltip'
  },
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
  title: 'Components/Input/InputDecorator',
} satisfies Meta<typeof InputDecorator>;

export default meta;
type Story = StoryObj<typeof InputDecorator>

export const Default: Story = {}

export const Color: Story = {
  render: () => <InputDecorator label='Input Type "color"' tooltip="A tooltip">
    <input style={{ width: '200px' }} type="color" />
  </InputDecorator>
};

export const Number: Story = {
  render: () => <InputDecorator
    label='Input Type "number"'
    tooltip="A tooltip"
    rightDecorators={
      <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>
    }
  >
    <input type="number" />
  </InputDecorator>
};

export const Range: Story = {
  render: () => <InputDecorator label='Input Type "range"' tooltip="A tooltip">
    <input style={{ width: '300px' }} type="range" />
  </InputDecorator>
};

export const DateTimeLocal: Story = {
  render: () => <InputDecorator label='Input Type "datetime-local"' tooltip="A tooltip">
    <input type="datetime-local" />
  </InputDecorator>
};

export const Url: Story = {
  render: () => <InputDecorator label='Input Type "url"' tooltip="A tooltip">
    <input type="url" />
  </InputDecorator>
};

export const Email: Story = {
  render: () => <InputDecorator label='Input Type "email"' tooltip="A tooltip">
    <input type="email" />
  </InputDecorator>
};

export const Disabled: Story = {
  render: () => <InputDecorator label="Disabled input" tooltip="A tooltip">
    <input type="text" disabled />
  </InputDecorator>
};

export const Password: Story = {
  render: () => <InputDecorator label='Input type "password"' tooltip="A tooltip">
    <input type="password" />
  </InputDecorator>
};

export const Decorators: Story = {
  render: () => <InputDecorator
    label="With decorator"
    tooltip="A tooltip"
    rightDecorators={[
      <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>,
      <Icon iconName="search" tabIndex={0} className="tk-input__right-decorators__clickable" key="search"/>,
    ]}
  >
    <input type="password" />
  </InputDecorator>
};

export const RequiredIndicator: Story = {
  render: () => <InputDecorator
    label="This field is required"
    tooltip="A tooltip"
    showRequired
  >
    <input type="password" />
  </InputDecorator>
};
