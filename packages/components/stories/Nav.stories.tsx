import '../src/styles';
import './stories.css';

import * as React from 'react';
import { useState } from 'react';
import { Nav } from '../src/components';
import { NavItem } from '../src/components/nav/Nav';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Nav> = {
  component: Nav,
  title: 'Components/Navigation',
} satisfies Meta<typeof Nav>;
      
export default meta;
type Story = StoryObj<typeof Nav>

const navItems: NavItem[] = [
  {
    label: 'Item 0',
    id: 0,
    panelId: 0
  },
  {
    label: 'Item 1',
    id: 1,
    panelId: 1
  },
  {
    label: 'Item 2',
    id: 2,
    panelId: 2
  },
];

export const Default: Story = {
  args: {
    items: navItems,
  }
}

export const NavigationWithContent: Story = {
  render: () => {
    const [activeItemId, setActiveItemId] = useState<number | string>(1);

    const onActiveTabChange = (navItem: NavItem) => {
      setActiveItemId(navItem.id);
    };
    return (
      <div>
        <Nav
          items={navItems}
          onActiveTabChange={onActiveTabChange}
          activeItemId={activeItemId}
        />
        <div className="tk-ml-2">
          {activeItemId === 0 ? (
            <div>Content item {activeItemId}</div>
          ) : (
            <div>{activeItemId === 1 ? <div role="tabpanel" aria-labelledby={'tk-tab-'+activeItemId} id={'tk-panel-'+activeItemId}>Content item {activeItemId} </div> : <div  role="tabpanel" aria-labelledby={'tk-tab-'+activeItemId} id={'tk-panel-'+activeItemId}>Content item {activeItemId}</div>}</div>
          )}
        </div>
      </div>
    );
  }
};
