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
    children: { control: { disable: true } },
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
  const [showToast, setShowToast] = useState(args.show);

  const handleClick = () => {
    console.log('clicked!!')
    setShowToast(!showToast);
  };

  return <Toast
    onClickClose={ handleClick }
    placement={ JSON.parse(placement) }
    show={ showToast }
    {...restArgs}
  />;
};

export const Standard = Template.bind({});
Standard.args = {
  closeIcon: true,
  icon: 'tk-icon-alert-triangle',
  message: 'Some text',
  onClickClose: () => { return },
  placement: JSON.stringify({ horizontal: 'center', vertical: 'center' }),
  show: true,
};

export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  closeIcon: false,
  message: 'Some text',
  placement: JSON.stringify({ horizontal: 'center', vertical: 'center' }),
  show: true,
};

export const CustomChild = Template.bind({});
CustomChild.args = {
  children: <input type="text" name="fname" />,
  placement: JSON.stringify({ horizontal: 'center', vertical: 'center' }),
  show: true,
};