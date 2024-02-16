/* eslint-disable react/display-name */
import '../src/styles';
import './stories.css';

import * as React from 'react';
import { Button, Icons } from '../src/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  args: {
    children: 'Some Text',
    variant: 'primary',
  },
  argTypes: { onClick: { action: 'clicked '} },
  component: Button,
  title: 'Components/Button'
}

export default meta;
type Story = StoryObj<typeof Button>

export const Variants: Story = {
  render: () => <div className="button-storybook">
    <h2>Primary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary" >Button</Button>
      <Button iconLeft={ <Icons.Lock /> } variant="primary">
        Icon left
      </Button>
      <Button iconRight={<Icons.Lock />} variant="primary">
        Icon right
      </Button>
      <Button variant="primary" loading>
        Button
      </Button>
      <Button variant="primary" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>

    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary-destructive"> Button</Button>
      <Button variant="primary-destructive" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="primary-destructive" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="primary-destructive" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="primary-destructive" disabled>
        Disabled
      </Button>
    </div>

    <h2 className="tk-mt-5h">Secondary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="secondary" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="secondary" loading>
        Button
      </Button>
      <Button variant="secondary" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>


    </div>
    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary-destructive"> Button</Button>
      <Button variant="secondary-destructive" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="secondary-destructive" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="secondary-destructive" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="secondary-destructive" disabled>
        Disabled
      </Button>
    </div>

    <h2 className="tk-mt-5h">Tertiary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary">Button</Button>
      <Button variant="tertiary" iconLeft={<Icons.Lock/>}>
        Icon left
      </Button>
      <Button variant="tertiary" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="tertiary" loading>
        Button
      </Button>
      <Button variant="tertiary" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
    </div>

    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary-destructive"> Button</Button>
      <Button variant="tertiary-destructive" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="tertiary-destructive" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="tertiary-destructive" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="tertiary-destructive" disabled>
        Disabled
      </Button>
    </div>
    <h3>active</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary-accent"> Button</Button>
      <Button variant="tertiary-accent" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="tertiary-accent" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="tertiary-accent" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="tertiary-accent" disabled>
        Disabled
      </Button>
    </div>
  </div>
};

export const Sizes: Story = {
  render: () => <div className="button-storybook">
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary"> Button</Button>
      <Button variant="primary" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="primary" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="primary" loading>
        Button
      </Button>
      <Button variant="primary" iconButton>
        <Icons.Lock/>
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary"> Button</Button>
      <Button variant="secondary" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="secondary" iconRight={<Icons.Lock />}>
        Icon right

      </Button>
      <Button variant="secondary" loading>
        Button
      </Button>
      <Button variant="secondary" iconButton>
        <Icons.Lock/>
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary"> Button</Button>
      <Button variant="tertiary" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="tertiary" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="tertiary" loading>
        Button
      </Button>
      <Button variant="tertiary" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
    </div>
    <h3>Small</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary" size="small" > Button</Button>
      <Button variant="primary" size="small" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="primary" size="small" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="primary" size="small" loading>
        Button
      </Button>
      <Button variant="primary" size="small" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="primary" size="small" disabled>
        Button
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary" size="small"> Button</Button>
      <Button variant="secondary" size="small" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="secondary" size="small" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="secondary" size="small" loading>
        Button
      </Button>
      <Button variant="secondary" size="small" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="secondary" size="small" disabled>
        Disabled
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary" size="small">Button</Button>
      <Button variant="tertiary" size="small" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="tertiary" size="small" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="tertiary" size="small" loading>
        Button
      </Button>
      <Button variant="tertiary" size="small" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="tertiary" size="small" disabled>
        Button
      </Button>
    </div>
    <h3>large</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary" size="large"> Button</Button>
      <Button variant="primary" size="large" iconLeft={<Icons.Lock />} >
        Icon left
      </Button>
      <Button variant="primary" size="large" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="primary" size="large" loading>
        Button
      </Button>
      <Button variant="primary" size="large" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="primary" size="large" disabled>
        Disabled
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary" size="large"> Button</Button>
      <Button variant="secondary" size="large" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="secondary" size="large" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="secondary" size="large" loading>
        Button
      </Button>
      <Button variant="secondary" size="large" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="secondary" size="large" disabled>
        Button
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary" size="large"> Button</Button>
      <Button variant="tertiary" size="large" iconLeft={<Icons.Lock />}>
        Icon left
      </Button>
      <Button variant="tertiary" size="large" iconRight={<Icons.Lock />}>
        Icon right
      </Button>
      <Button variant="tertiary" size="large" loading>
        Button
      </Button>
      <Button variant="tertiary" size="large" iconButton>
        <Icons.Lock />
      </Button>
      <Button variant="tertiary" size="large" disabled>
        Disabled
      </Button>
    </div>
  </div>
};
