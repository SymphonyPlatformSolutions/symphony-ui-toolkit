import React from 'react';
import { Button } from '../src/components';

export const Buttons: React.SFC = () => (
  <>
    <h2>Primary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="primary">Button</Button>
      <Button variant="primary">
        <i className="tk-ic-lock" />
        Button
      </Button>
      <Button variant="primary" iconButton>
        <i className="tk-ic-more-v" />
      </Button>
      <Button variant="primary" disabled>
        Button
      </Button>
      <Button variant="primary" disabled>
        <i className="tk-ic-lock" />
        Button
      </Button>
      <Button variant="primary" loading>
        Invisible
      </Button>
      <Button variant="primary" disabled>
        <i className="tk-ic-check tk-color-action-ok" />
      </Button>
    </div>

    <h2>Secondary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">
        <i className="tk-ic-lock" />
        Button
      </Button>
      <Button variant="secondary" iconButton>
        <i className="tk-ic-more-v" />
      </Button>
      <Button variant="secondary" disabled>
        Button
      </Button>
      <Button variant="secondary" disabled>
        <i className="tk-ic-lock" />
        Button
      </Button>
      <Button variant="secondary" loading>
        Invisible
      </Button>
      <Button variant="secondary" disabled>
        <i className="tk-ic-check tk-color-action-ok" />
      </Button>
    </div>

    <h2>Tertiary</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="tertiary">Button</Button>
      <Button variant="tertiary">
        <i className="tk-ic-lock" />
        Button
      </Button>
      <Button variant="tertiary" iconButton>
        <i className="tk-ic-more-v" />
      </Button>
      <Button variant="tertiary" disabled>
        Button
      </Button>
      <Button variant="tertiary" disabled>
        <i className="tk-ic-lock" />
        Button
      </Button>
      <Button variant="tertiary" loading>
        Invisible
      </Button>
      <Button variant="tertiary" disabled>
        <i className="tk-ic-check tk-color-action-ok" />
      </Button>
    </div>

    <h2>Destructive</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Button variant="destructive">Button</Button>
      <Button variant="destructive">
        <i className="tk-ic-lock" />
        Button
      </Button>
      <Button variant="destructive" iconButton>
        <i className="tk-ic-more-v" />
      </Button>
      <Button variant="destructive" disabled>
        Button
      </Button>
      <Button variant="destructive" disabled>
        <i className="tk-ic-lock" />
        Button
      </Button>
      <Button variant="destructive" loading>
        Invisible
      </Button>
      <Button variant="destructive" disabled>
        <i className="tk-ic-check tk-color-action-ok" />
      </Button>
    </div>
  </>
);

export default {
  title: 'Button',
  component: Buttons
};
