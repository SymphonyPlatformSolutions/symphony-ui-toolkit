import '../src/styles';
import './stories.css';

import * as React from 'react';
import Icon from '../src/components/icon/FontIcon';
import  { Badge } from '../src/components/badge';
import { Timeline, TimeLineItem, useTimeline } from '../src/components/timeline';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  title: 'Components/Timeline',
} satisfies Meta<typeof Timeline>;
      
export default meta;
type Story = StoryObj<typeof Timeline>

type MyItem = {
  title: string;
  name: string;
  price: number;
};

const DATA: TimeLineItem<MyItem>[] = [
  {
    icon: <Icon iconName="plus" />,
    time: '2007-03-01T13:00:00Z',
    value: { title: 'Title 1', name: 'Item 1', price: 23.45 },
    hasBody: true,
  },
  {
    icon: <Icon iconName="right-arrow" />,
    time: '2007-03-01T17:00:00Z',
    value: { title: 'Title 2', name: 'Item 2', price: 132.55 },
    hasBody: true,
  },
  {
    icon: <Icon iconName="block" />,
    time: '2007-03-01T19:00:00Z',
    value: { title: 'Title 3', name: 'Item 3', price: 34.12 },
    hasBody: true,
  },
];

const Header = (item?: MyItem) => <div>{item?.title}</div>;
const Body = (item?: MyItem) => (
  <>
    <div>
      <Badge variant="positive" className="tk-mb-h">{item?.name}</Badge>
    </div>
    <div>
      <Badge variant="neutral">{item?.price}</Badge>
    </div>
  </>
);

export const Default: Story = {
  render: () => {
    const { Timeline, timelineProps, expandAll, collapseAll, isAllExpanded } =
    useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
    });
 
    return (
      <>
        <button onClick={isAllExpanded ? collapseAll : expandAll} className="tk-mb-2h">
          {isAllExpanded ? 'COLLAPSE ALL' : 'EXPAND ALL'}
        </button>
        <Timeline {...timelineProps} />
      </>
    );
  }
}

export const Expanded: Story = {
  render: () => {
    const { Timeline, timelineProps, expandAll, collapseAll, isAllExpanded } =
    useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
      expanded: true,
    });

    
    return <>
      <button onClick={isAllExpanded ? collapseAll : expandAll} className="tk-mb-2h">
        {isAllExpanded ? 'COLLAPSE ALL' : 'EXPAND ALL'}
      </button>
      <Timeline {...timelineProps} />
    </>
  }
};
