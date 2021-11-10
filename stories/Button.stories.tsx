import * as React from 'react';
import { Button, Icon } from '../src/components';
import '../src/styles';
import './stories.scss';

const Template = (args) => (<Button {...args} />);

export const Default = Template.bind({});

Default.args = {
  children: 'Some Text',
  variant: 'primary',
};

export const Variants: React.FC = () => (
  <div className="button-storybook">
    <h2>Primary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary" >Button</Button>
      <Button variant="primary" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="primary" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="primary" loading>
        Button
      </Button>
      <Button variant="primary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>

    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary-destructive"> Button</Button>
      <Button variant="primary-destructive" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="primary-destructive" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="primary-destructive" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary-destructive" disabled>
        Disabled
      </Button>
    </div>

    <h2 className="tk-mt-5h">Secondary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="secondary" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="secondary" loading>
        Button
      </Button>
      <Button variant="secondary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>


    </div>
    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary-destructive"> Button</Button>
      <Button variant="secondary-destructive" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="secondary-destructive" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="secondary-destructive" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary-destructive" disabled>
        Disabled
      </Button>
    </div>

    <h2 className="tk-mt-5h">Tertiary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary">Button</Button>
      <Button variant="tertiary" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="tertiary" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="tertiary" loading>
        Button
      </Button>
      <Button variant="tertiary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
    </div>

    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary-destructive"> Button</Button>
      <Button variant="tertiary-destructive" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="tertiary-destructive" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="tertiary-destructive" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary-destructive" disabled>
        Disabled
      </Button>
    </div>
    <h3>active</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary-accent"> Button</Button>
      <Button variant="tertiary-accent" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="tertiary-accent" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="tertiary-accent" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary-accent" disabled>
        Disabled
      </Button>
    </div>
  </div>
);

export const Sizes: React.FC = () => (
  <div className="button-storybook">
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary"> Button</Button>
      <Button variant="primary" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="primary" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="primary" loading>
        Button
      </Button>
      <Button variant="primary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary"> Button</Button>
      <Button variant="secondary" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="secondary" iconRight={<Icon iconName="lock" />}>
        Icon right

      </Button>
      <Button variant="secondary" loading>
        Button
      </Button>
      <Button variant="secondary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary"> Button</Button>
      <Button variant="tertiary" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="tertiary" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="tertiary" loading>
        Button
      </Button>
      <Button variant="tertiary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
    </div>
    <h3>Small</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary" size="small" > Button</Button>
      <Button variant="primary" size="small" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="primary" size="small" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="primary" size="small" loading>
        Button
      </Button>
      <Button variant="primary" size="small" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary" size="small" disabled>
        Button
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary" size="small"> Button</Button>
      <Button variant="secondary" size="small" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="secondary" size="small" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="secondary" size="small" loading>
        Button
      </Button>
      <Button variant="secondary" size="small" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary" size="small" disabled>
        Disabled
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary" size="small">Button</Button>
      <Button variant="tertiary" size="small" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="tertiary" size="small" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="tertiary" size="small" loading>
        Button
      </Button>
      <Button variant="tertiary" size="small" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary" size="small" disabled>
        Button
      </Button>
    </div>
    <h3>large</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary" size="large"> Button</Button>
      <Button variant="primary" size="large" iconLeft={<Icon iconName="lock" />} >
        Icon left
      </Button>
      <Button variant="primary" size="large" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="primary" size="large" loading>
        Button
      </Button>
      <Button variant="primary" size="large" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary" size="large" disabled>
        Disabled
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary" size="large"> Button</Button>
      <Button variant="secondary" size="large" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="secondary" size="large" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="secondary" size="large" loading>
        Button
      </Button>
      <Button variant="secondary" size="large" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary" size="large" disabled>
        Button
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary" size="large"> Button</Button>
      <Button variant="tertiary" size="large" iconLeft={<Icon iconName="lock" />}>
        Icon left
      </Button>
      <Button variant="tertiary" size="large" iconRight={<Icon iconName="lock" />}>
        Icon right
      </Button>
      <Button variant="tertiary" size="large" loading>
        Button
      </Button>
      <Button variant="tertiary" size="large" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary" size="large" disabled>
        Disabled
      </Button>
    </div>
  </div>
);
export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { Icon },
  argTypes: { onClick: { action: 'clicked' } },
};
