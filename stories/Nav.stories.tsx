import * as React from 'react';
import { useState } from 'react';
import { Nav } from '../src/components';
import { NavItem } from '../src/components/nav/Nav';

const navItems: NavItem[] = [
  {
    label: 'Item 0',
    id: 0,
  },
  {
    label: 'Item 1',
    id: 1,
  },
  {
    label: 'Item 2',
    id: 2,
  },
];

const Template = (args) => {
  return (
    <div>
      <Nav {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: navItems,
};

export const NavigationWithContent: React.FC = () => {
  const [activeItemId, setActiveItemId] = useState(1);

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
          <div>{activeItemId === 1 ? <div>Content item {activeItemId} </div> : <div>Content item {activeItemId}</div>}</div>
        )}
      </div>
    </div>
  );
};

export default {
  title: 'Components/Navigation',
  component: Nav,
};
