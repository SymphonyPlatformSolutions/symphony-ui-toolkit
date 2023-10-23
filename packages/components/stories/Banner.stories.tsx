/* eslint-disable react/display-name */
import * as React from 'react';
import { Banner, BannerType } from '../src/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Banner> = {
  args: {
    actionText: 'Action',
    content: 'Banner text content here',
    onAction: () => {
      alert('action clicked');
    },
    isClosable: true,
    onClose: () => {
      alert('close clicked');
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.values(BannerType),
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
  },
  component: Banner,
  decorators: [
    (Story) => (<div style={{ margin: '0 auto', textAlign: 'center' }}>
      <Story />
    </div>)
  ],
  title: 'Components/Banner',
} satisfies Meta<typeof Banner>;
export default meta;
type Story = StoryObj<typeof Banner>

export const WithActionOnly: Story = {
  render: () => <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
  />
};

export const WithCloseOnly: Story = {
  render: () => <Banner
    content="Banner text content here"
    onClose={() => alert('close clicked')}
    isClosable
  />
};

export const MultilineContent: Story = {
  render: () => <Banner
    content="This is a very long banner content that should be displayed on multiple lines. This is a very long banner content that should be displayed on multiple lines."
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
  />
};

export const SuccessVariant: Story = {
  render: () => <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
    variant={BannerType.SUCCESS}
  />
};

export const WarningVariant: Story = {
  render: () => <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
    variant={BannerType.WARNING}
  />
};

export const ErrorVariant: Story = {
  render: () => <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
    variant={BannerType.ERROR}
  />
};

export const SmallSize: Story = {
  render: () => <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
    size="small"
  />
};
