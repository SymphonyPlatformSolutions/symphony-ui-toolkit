import '../src/styles';
import './stories.css';

import * as React from 'react';
import { useState } from 'react';
import { Toast } from '../src/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
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
  component: Toast,
  decorators: [
    (Story) => (
      <div style={{ margin: '150px auto', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
  title: 'Components/Toast',
} satisfies Meta<typeof Toast>;
      
export default meta;
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    closeIcon: true,
    content: 'Some text',
    leftIcon: 'alert-triangle',
    onClickClose: () => {
      return;
    },
    placement: { horizontal: 'center', vertical: 'center' },
    show: true,
  },
  render: (args) => {
    const { placement, ...restArgs } = args;
    const [showToast, setShowToast] = useState(true);
    const onClickClose = () => setShowToast(!showToast);

    return (
      <Toast
        onClickClose={onClickClose}
        placement={placement}
        {...restArgs}
        show={showToast}
      />
    );
  }
}

export const Closable: Story = {
  render: () => <Toast
    closeIcon
    content="Some text"
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
    onClickClose={() => alert('click close')}
  />
};

export const NotClosable: Story = {
  render: () => <Toast
    closeIcon={false}
    content="Some text"
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
  />
};

export const WithLeftIcon: Story = {
  render: () => <Toast
    content="Some text"
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
    leftIcon="alert-triangle"
  />
};

export const WithLeftIconAndClosable: Story = {
  render: () => <Toast
    content="Some text"
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
    leftIcon="alert-triangle"
    closeIcon
    onClickClose={() => alert('click close')}
  />
};

export const ToastWithInput: Story = {
  render: () => <Toast
    content={
      <>
        <p>Type something you want:</p>
        <input type="text" name="fname" />
      </>
    }
    placement={{ horizontal: 'center', vertical: 'center' }}
    show
  />
};
