import * as React from 'react';
import { useState } from 'react';
import { Toast } from '../src/components';
import Icon from '../src/components/icon';

export default {
  title: 'Components/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <div style={{ margin: '150px auto', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: { control: { disable: true } },
    placement: {
      control: {
        type: 'inline-radio',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
};

const Template = (args) => {
  const [showToast, setShowToast] = useState(true);

  const handleClick = () => {
    setShowToast(!showToast);
  };

  return <Toast show={showToast} {...args} />;
};

// eslint-disable-next-line react/display-name
const addExplanation = (explanation) => (Story) => (
  <div>
    <p>{explanation}</p>
    <Story />
  </div>
);
export const Standard = Template.bind({});

Standard.args = {
  message: 'Some text',
  placement: { x: 'center', y: 'center' },
  show: true,
};

export const WithACloseAction = Template.bind({});
WithACloseAction.args = {
  description: 'Some text',
  placement: 'top',
  closeLabel: 'Close',
  children: <input type="text" name="fname" />,
};

export const ShowHide = Template.bind({});
ShowHide.args = {
  description: 'Toggle the visibility of the Tooltip in the Controls tab',
  placement: 'top',
  visible: true,
  children: <input type="text" name="fname" />,
};
ShowHide.argTypes = {
  placement: { control: { disable: true } },
};

export const OnClick = (args) => {
  return (
    <Toast {...args}>
      <Icon iconName="info-round"/>
    </Toast>
  );
};

OnClick.args = {
  description: 'Click on the icon',
  displayTrigger: 'click',
  closeLabel: 'Close',
  placement: 'top',
  children: <button type={'button'}>A button</button>,
};

OnClick.decorators = [addExplanation('Click the icon to see the tooltip')];

export const OnHover = (args) => {
  return (
    <Toast {...args}>
      <span>
        <Icon iconName="info-round" />
      </span>
    </Toast>
  );
};

OnHover.args = {
  children: <button type={'button'}>A button</button>,
  description: 'Message appears on hover',
  displayTrigger: 'hover',
  placement: 'top',
};
OnHover.decorators = [addExplanation('Hover the icon to see the tooltip')];

export const Placements = Template.bind({});
Placements.args = {
  description: 'Select a placement in the Controls tab',
  placement: 'top',
  children: <input type="text" name="fname" />,
};