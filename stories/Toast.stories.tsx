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
        JSON.stringify({ horizontal: 'left', vertical: 'top' }),
        JSON.stringify({ horizontal: 'center', vertical: 'top' }),
        JSON.stringify({ horizontal: 'right', vertical: 'top' }),
        JSON.stringify({ horizontal: 'left', vertical: 'center' }),
        JSON.stringify({ horizontal: 'center', vertical: 'center' }),
        JSON.stringify({ horizontal: 'right', vertical: 'center' }),
        JSON.stringify({ horizontal: 'left', vertical: 'bottom' }),
        JSON.stringify({ horizontal: 'center', vertical: 'bottom' }),
        JSON.stringify({ horizontal: 'right', vertical: 'bottom' }),
      ],
    },
  },
};

const Template = (args) => {
  const { placement, ...restArgs } = args;
  const [showToast, setShowToast] = useState(true);

  const onClickClose = () => {
    setShowToast(!showToast);
  };

  return (
    <Toast
      onClickClose={onClickClose}
      placement={JSON.parse(placement)}
      show={showToast}
      {...restArgs}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  closeIcon: true,
  content: 'Some text',
  leftIcon: 'alert-triangle',
  onClickClose: () => {
    return;
  },
  placement: JSON.stringify({ horizontal: 'center', vertical: 'center' }),
  show: true,
};

export const Closable: React.FC = () => (
  <Toast
    closeIcon
    content="Some text"
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
    onClickClose={() => alert('click close')}
  />
);

export const NotClosable: React.FC = () => (
  <Toast
    closeIcon={false}
    content="Some text"
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
  />
);

export const WithLeftIcon: React.FC = () => (
  <Toast
    content="Some text"
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
    leftIcon="alert-triangle"
  />
);

export const WithLeftIconAndClosable: React.FC = () => (
  <Toast
    content="Some text"
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
    leftIcon="alert-triangle"
    closeIcon
    onClickClose={() => alert('click close')}
  />
);

export const ToastWithInput: React.FC = () => (
  <Toast
    content={
      <>
        <p>Type something you want:</p>
        <input type="text" name="fname" />
      </>
    }
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
  />
);
