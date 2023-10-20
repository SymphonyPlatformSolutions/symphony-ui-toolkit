/* eslint-disable react/display-name */
import '../src/styles';
import './stories.css';

import * as React from 'react';
import { Button, Card, Typography } from '../src/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  args: {
    children: 'Card title',
    className: 'tk-p-1'
  },
  component: Card,
  title: 'Components/Containers/Card'
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>

export const Default: Story = {};

export const Content: Story = {
  render: () => <Card>
    <div className="tk-m-1">
      <Typography variant="bold">Card title</Typography>
      <div className="tk-pb-1">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <Button>Button</Button>
    </div>
  </Card>
}
