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

const Template = (args) => (
  <InputDecorator
    label={args.description}
    tooltip="A tooltip"
    rightDecorators={args.rightDecorators}
  >
    {args.children}
  </InputDecorator>
);

export const Standard = Template.bind({});
Standard.args = {
  description: 'Input Type "text"',
  rightDecorators: [
    <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>,
    <Icon iconName="search" tabIndex={0} className="tk-input__right-decorators__clickable" key="search"/>,
  ],
  children: <input type="text" />,
};

export const Color = () => (
  <InputDecorator label='Input Type "color"' tooltip="A tooltip">
    <input style={{ width: '200px' }} type="color" />
  </InputDecorator>
);

export const Number = () => (
  <InputDecorator
    label='Input Type "number"'
    tooltip="A tooltip"
    rightDecorators={
      <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>
    }
  >
    <input type="number" />
  </InputDecorator>
);

export const Range = () => (
  <InputDecorator label='Input Type "range"' tooltip="A tooltip">
    <input style={{ width: '300px' }} type="range" />
  </InputDecorator>
);

export const DateTimeLocal = () => (
  <InputDecorator label='Input Type "datetime-local"' tooltip="A tooltip">
    <input type="datetime-local" />
  </InputDecorator>
);

export const Url = () => (
  <InputDecorator label='Input Type "url"' tooltip="A tooltip">
    <input type="url" />
  </InputDecorator>
);

export const Email = () => (
  <InputDecorator label='Input Type "email"' tooltip="A tooltip">
    <input type="email" />
  </InputDecorator>
);

export const Disabled = () => (
  <InputDecorator label="Disabled input" tooltip="A tooltip">
    <input type="text" disabled />
  </InputDecorator>
);

export const Password = () => (
  <InputDecorator label='Input type "password"' tooltip="A tooltip">
    <input type="password" />
  </InputDecorator>
);

export const Decorators = () => (
  <InputDecorator
    label="With decorator"
    tooltip="A tooltip"
    rightDecorators={[
      <Icon iconName="copy" tabIndex={0} className="tk-input__right-decorators__clickable" key="copy"/>,
      <Icon iconName="search" tabIndex={0} className="tk-input__right-decorators__clickable" key="search"/>,
    ]}
  >
    <input type="password" />
  </InputDecorator>
);

export const RequiredIndicator = () => (
  <InputDecorator
    label="This field is required"
    tooltip="A tooltip"
    showRequired
  >
    <input type="password" />
  </InputDecorator>
);
