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
  }
};

const Template = (args) => {
  const { onClose, ...restProps } = args;

  const [showBanner, setShowBanner] = useState(true);

  const handleClickClose = () => {
    setShowBanner(false);
    onClose();
  };

  return <Banner
    onClose={handleClickClose}
    show={showBanner}
    content="Banner text content here"
    {...restProps}
  />;
};


const commonProps = {
  actionText: 'Action',
  onAction: () => { alert('action clicked') },
  isClosable: true,
  onClose: () => { alert('close clicked') },
}

export const Default = Template.bind({});
Default.args = {
  ...commonProps,
  content: 'Banner text content here',
};

export const WithActionOnly = Template.bind({});
WithActionOnly.args = {
  actionText: 'Action',
  onAction: () => { alert('action clicked') },
};

export const WithCloseOnly = Template.bind({});
WithCloseOnly.args = {
  isClosable: true,
  onClose: () => { alert('close clicked') },
};

export const MultilineContent = Template.bind({});
MultilineContent.args = {
  ...commonProps,
  content: 'This is a very long banner content that should be displayed on multiple lines. This is a very long banner content that should be displayed on multiple lines.'
};

export const SuccessVariant = Template.bind({});
SuccessVariant.args = {
  ...commonProps,
  variant: BannerType.SUCCESS,
};

export const WarningVariant = Template.bind({});
WarningVariant.args = {
  ...commonProps,
  variant: BannerType.WARNING,
};

export const ErrorVariant = Template.bind({});
ErrorVariant.args = {
  ...commonProps,
  variant: BannerType.ERROR,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  ...commonProps,
  size: 'small',
};
