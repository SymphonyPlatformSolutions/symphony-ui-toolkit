import * as React from 'react';
import Typography from '../src/components/typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Utils/Typography',
} satisfies Meta<typeof Typography>;
      
export default meta;
type Story = StoryObj<typeof Typography>

export const Titles: Story = {
  args: {
    type: 'h1',
    variant: ['italic', 'bold']
  },
  render: (args) => <Typography {...args}>Title h1 italic and bold</Typography>
}

const text = 'Research and development refer to activities in connection with corporate or government innovation';

export const TypographyUtils: Story = {
  render: () => <div>
    <h1>Typography</h1>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="h1">H1. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="h2">H2. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="h3">H3. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="h4">H4. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis">Body. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="small">Small. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" variant="bold">Bold. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" variant="italic">Italic. {text}</Typography>
  </div>
};
