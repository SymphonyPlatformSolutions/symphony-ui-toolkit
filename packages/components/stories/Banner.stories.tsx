import * as React from 'react';
import { useState } from 'react';
import { Banner, BannerType } from '../src/components';

export default {
  title: 'Components/Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
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
};

const Template = (args) => {
  const { onClose, ...restProps } = args;
  const [showBanner, setShowBanner] = useState(true);

  const handleClickClose = () => {
    setShowBanner(false);
    onClose();
  };

  return (
    <Banner
      onClose={handleClickClose}
      show={showBanner}
      content="Banner text content here"
      {...restProps}
    />
  );
};

const commonProps = {
  actionText: 'Action',
  onAction: () => {
    alert('action clicked');
  },
  isClosable: true,
  onClose: () => {
    alert('close clicked');
  },
};

export const Default = Template.bind({});
Default.args = {
  ...commonProps,
  content: 'Banner text content here',
};

export const WithActionOnly: React.FC = () => (
  <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
  />
);

export const WithCloseOnly: React.FC = () => (
  <Banner
    content="Banner text content here"
    onClose={() => alert('close clicked')}
    isClosable
  />
);

export const MultilineContent: React.FC = () => (
  <Banner
    content="This is a very long banner content that should be displayed on multiple lines. This is a very long banner content that should be displayed on multiple lines."
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
  />
);

export const SuccessVariant: React.FC = () => (
  <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
    variant={BannerType.SUCCESS}
  />
);

export const WarningVariant: React.FC = () => (
  <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
    variant={BannerType.WARNING}
  />
);

export const ErrorVariant: React.FC = () => (
  <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
    variant={BannerType.ERROR}
  />
);

export const SmallSize: React.FC = () => (
  <Banner
    content="Banner text content here"
    actionText="Action"
    onAction={() => alert('action clicked')}
    onClose={() => alert('close clicked')}
    isClosable
    size="small"
  />
);
