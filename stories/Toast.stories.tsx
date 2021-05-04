import * as React from 'react';
import { useState } from 'react';
import { Toast } from '../src/components';

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
    placement: {
      control: { type: 'select' },
      options: [
        JSON.stringify({ horizontal: 'left', vertical: 'top'}),
        JSON.stringify({ horizontal: 'center', vertical: 'top'}),
        JSON.stringify({ horizontal: 'right', vertical: 'top'}),
        JSON.stringify({ horizontal: 'left', vertical: 'center'}),
        JSON.stringify({ horizontal: 'center', vertical: 'center'}),
        JSON.stringify({ horizontal: 'right', vertical: 'center'}),
        JSON.stringify({ horizontal: 'left', vertical: 'bottom'}),
        JSON.stringify({ horizontal: 'center', vertical: 'bottom'}),
        JSON.stringify({ horizontal: 'right', vertical: 'bottom'})
      ],
    },
  },
};

const Template = (args) => {
  const { placement, ...restArgs } = args;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showToast, setShowToast] = useState(true);

  const onClickClose = () => {
    setShowToast(!showToast);
  };

  return <Toast
    onClickClose={ onClickClose }
    placement={ JSON.parse(placement) }
    show={ showToast }
    {...restArgs}
  />;
};

export const Standard = Template.bind({});
Standard.args = {
  closeIcon: true,
  content: 'Some text',
  leftIcon: 'alert-triangle',
  onClickClose: () => { return },
  placement: JSON.stringify({ horizontal: 'center', vertical: 'center' }),
  show: true,
};

export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  closeIcon: false,
  content: 'Some text',
  placement: JSON.stringify({ horizontal: 'center', vertical: 'center' }),
  show: true,
};

export const InputToast = Template.bind({});
InputToast.args = {
  content: <input type="text" name="fname" />,
  placement: JSON.stringify({ horizontal: 'center', vertical: 'center' }),
  show: true,
};