import React from 'react';
import { Button } from '../src/components';
import Icon from '../src/components/icon/Icon';

export const Buttons: React.SFC = () => (
  <div className="tk-text-color">
    <h2>Primary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary"> Button</Button>
      <Button variant="primary">
        <Icon iconName="lock" className="tk-mr-h"></Icon>
           Button
      </Button>
      <Button variant="primary" iconButton>
        <Icon iconName="more-_"></Icon>
      </Button>
      <Button variant="primary" disabled>
        Button
      </Button>
      <Button variant="primary" disabled>
        <Icon iconName="lock"></Icon>
        Button
      </Button>
      <Button variant="primary" loading>
        Invisible
      </Button>
      <Button variant="primary" disabled>
        <i className="tk-icon-check tk-color-action-ok" />
      </Button>
    </div>

    <h2>Secondary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Button
      </Button>
      <Button variant="secondary" iconButton>
        <Icon iconName="more-_"></Icon>
      </Button>
      <Button variant="secondary" disabled>
        Button
      </Button>
      <Button variant="secondary" disabled>
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Button
      </Button>
      <Button variant="secondary" loading>
        Invisible
      </Button>
      <Button variant="secondary" disabled>
        <i className="tk-icon-check tk-color-action-ok" />
      </Button>
    </div>

    <h2>Tertiary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary">Button</Button>
      <Button variant="tertiary">
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Button
      </Button>
      <Button variant="tertiary" iconButton>
        <Icon iconName="more-_"></Icon>
      </Button>
      <Button variant="tertiary" disabled>
        Button
      </Button>
      <Button variant="tertiary" disabled>
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Button
      </Button>
      <Button variant="tertiary" loading>
        Invisible
      </Button>
      <Button variant="tertiary" disabled>
        <i className="tk-icon-check tk-color-action-ok" />
      </Button>
    </div>

    <h2>Destructive</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="destructive">Button</Button>
      <Button variant="destructive">
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Button
      </Button>
      <Button variant="destructive" iconButton>
        <Icon iconName="more-_"></Icon>
      </Button>
      <Button variant="destructive" disabled>
        Button
      </Button>
      <Button variant="destructive" disabled>
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Button
      </Button>
      <Button variant="destructive" loading>
        Invisible
      </Button>
      <Button variant="destructive" disabled>
        <i className="tk-icon-check tk-color-action-ok" />
      </Button>
    </div>
  </div>
);

export default {
  title: 'Button',
  component: Buttons,
};
