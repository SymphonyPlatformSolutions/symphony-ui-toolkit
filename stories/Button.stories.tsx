import * as React from 'react';
import { Button, Icon } from '../src/components';
import '../src/styles';
import './stories.scss';

const Template = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Some Text',
  variant: 'primary',
};

export const Variants: React.FC = () => (
  <div>
    <h2>Primary</h2>
    <h3>default</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary"> Button</Button>
      <Button variant="primary">
        <Icon iconName="lock" className="tk-mr-h"/>
        Icon left
      </Button>
      <Button variant="primary">
        Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="primary" loading>
        Invisible
      </Button>
      <Button variant="primary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary" disabled>
        Button
      </Button>
      
    </div>
    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary-destructive"> Button</Button>
      <Button variant="primary-destructive">
        <Icon iconName="lock" className="tk-mr-h"/>
        Icon left
      </Button>
      <Button variant="primary-destructive">
        Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
   
      <Button variant="primary-destructive" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary-destructive" disabled>
        Button
      </Button>
    </div>

    <h2>Secondary</h2>
    <h3>default</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Icon left
      </Button>
      <Button variant="secondary">
        Icon right
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="secondary" loading>
        Invisible
      </Button>
      <Button variant="secondary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary" disabled>
        Button
      </Button>
    
  
    </div>
    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary-destructive"> Button</Button>
      <Button variant="secondary-destructive">
        <Icon iconName="lock" className="tk-mr-h"/>
        Icon left
      </Button>
      <Button variant="secondary-destructive">
        Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
 
      <Button variant="secondary-destructive" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary-destructive" disabled>
        Button
      </Button>
    </div>

    <h2>Tertiary</h2>
    <h3>default</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary">Button</Button>
      <Button variant="tertiary">
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Icon left
      </Button>
      <Button variant="tertiary">
        Icon right
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="tertiary" loading>
        Invisible
      </Button>
      <Button variant="tertiary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary" disabled>
        Button
      </Button>

    </div>

    <h3>destructive</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary-destructive"> Button</Button>
      <Button variant="tertiary-destructive">
        <Icon iconName="lock" className="tk-mr-h"/>
        Icon left
      </Button>
      <Button variant="tertiary-destructive">
        Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
 
      <Button variant="tertiary-destructive" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary-destructive" disabled>
        Button
      </Button>
    </div>
    <h3>active</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary-accent"> Button</Button>
      <Button variant="tertiary-accent">
        <Icon iconName="lock" className="tk-mr-h"/>
        Icon left
      </Button>
      <Button variant="tertiary-accent">
        Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
 
      <Button variant="tertiary-accent" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary-accent" disabled>
        Button
      </Button>
    </div>
  </div>
);

export const Sizes: React.FC = () => (
  <div>
    <h3>Default</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary"> Button</Button>
      <Button variant="primary">
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="primary">
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="primary" loading>
      Invisible
      </Button>
      <Button variant="primary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary" disabled>
      Button
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary"> Button</Button>
      <Button variant="secondary">
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="secondary">
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="secondary" loading>
      Invisible
      </Button>
      <Button variant="secondary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary" disabled>
      Button
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary"> Button</Button>
      <Button variant="tertiary">
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="tertiary">
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="tertiary" loading>
      Invisible
      </Button>
      <Button variant="tertiary" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary" disabled>
      Button
      </Button>
    </div>
    <h3>Small</h3>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary" size="small" > Button</Button>
      <Button variant="primary" size="small">
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="primary" size="small">
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="primary" size="small" loading>
      Invisible
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
      <Button variant="secondary" size="small">
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="secondary" size="small">
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="secondary" size="small" loading>
      Invisible
      </Button>
      <Button variant="secondary" size="small" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="secondary" size="small" disabled>
      Button
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary" size="small"> Button</Button>
      <Button variant="tertiary" size="small">
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="tertiary" size="small">
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="tertiary" size="small" loading>
      Invisible
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
      <Button variant="primary" size="large" >
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="primary" size="large"> 
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="primary" size="large" loading>
      Invisible
      </Button>
      <Button variant="primary" size="large" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="primary" size="large" disabled>
      Button
      </Button>
    </div>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary" size="large"> Button</Button>
      <Button variant="secondary">
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="secondary" size="large">
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="secondary" size="large" loading>
      Invisible
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
      <Button variant="tertiary" size="large">
        <Icon iconName="lock" className="tk-mr-h"/>
      Icon left
      </Button>
      <Button variant="tertiary" size="large">
      Icon right 
        <Icon iconName="lock" className="tk-ml-h"></Icon>
      </Button>
      <Button variant="tertiary" size="large" loading>
      Invisible
      </Button>
      <Button variant="tertiary" size="large" iconButton>
        <Icon iconName="lock"></Icon>
      </Button>
      <Button variant="tertiary" size="large" disabled>
      Button
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
