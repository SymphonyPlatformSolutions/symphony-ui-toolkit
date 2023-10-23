import * as React from 'react';
import Loader from '../src/components/loader';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>;
      
export default meta;
type Story = StoryObj<typeof Loader>

export const Default: Story = {}

export const Spinner: Story = {
  render: () => <div>
    <h2 className="tk-mt-4h">Variants</h2>
    <Loader variant="default" className="tk-ml-h" />
    <Loader variant="primary" className="tk-ml-2h" />
    <Loader variant="attention" className="tk-ml-2h" />
    <Loader variant="warning" className="tk-ml-2h" />
    <Loader variant="ok" className="tk-ml-2h" />
  </div>
};
