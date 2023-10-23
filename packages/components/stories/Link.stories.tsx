import '../src/styles';
import './stories.css';

import * as React from 'react';
import { Icon, Link } from '../src/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Link> = {
  args: {  url: 'https://www.symphony.com',
    children: <Icon iconName={'check'} />
  },
  component: Link,
  title: 'Components/Link',
} satisfies Meta<typeof Link>;
    
export default meta;
type Story = StoryObj<typeof Link>

export const Default: Story = {};

export const Links: Story = {
  render: () => (
    <div>
      <h3>URL link</h3>
      <Link url={'https://www.symphony.com'} /><br /><br />
      <h3>Icon link</h3>
      <Link url={'https://www.symphony.com'}><Icon iconName={'check'} /></Link><br /><br />
      <h3>Text link</h3>
      <Link url={'https://www.symphony.com'}>Learn More</Link><br /><br />
    </div>
  )}
