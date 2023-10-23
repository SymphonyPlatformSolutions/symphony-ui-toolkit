/**
 * 
 * 
 * 
 * 
 * 
 * TODO - This Story has never been functional. Fix it!
 * 
 * 
 * 
 * 
 * 
 */

import *  as React from 'react';
import VirtualizedList from '../src/components/virtualized-list';
import Button from '../src/components/button';
import { SvgIcon } from '../src/components/icon';
import { Call, Calendar } from '../src/components/icons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof VirtualizedList> = {
  component: VirtualizedList,
  title: 'Utils/Virtualized Lists',
} satisfies Meta<typeof VirtualizedList>;
      
export default meta;
type Story = StoryObj<typeof VirtualizedList>

function createItems() {
  const items: {name: string, status: string}[] = []
  for (let i = 1; i < 20; i++) {
    if(i % 2 === 0) {
      items.push({name: 'Meeting ' + i, status: 'ongoing'})
    } else {
      items.push({name: 'Meeting ' + i, status: 'upcoming'})
    }
  }
  return items;
}


function rowRenderer() {
  return createItems().map((item, index) => {
    return (
      <div key={index}>
        {/* text might not look good in dark mode, to be replaced by Typography component */}
        {item.name} -
        <Button iconButton variant="tertiary">
          {item.status === 'ongoing' ? <SvgIcon icon={Call}/> : <SvgIcon icon={ Calendar}/>}
        </Button>
      </div>
    )
  })
}

function noRowsRenderer() {
  return (
    <h3 style={{color: 'white', textAlign: 'center'}}>
      This is an empty list.
    </h3>
  )
}

export const VirtualizedLists: Story = {
  render: () => <div style = {{display: 'flex'}}>
    <div>
      <h3>List with content</h3>
      <p>List item is rendered by providing a rowRenderer</p><br/>
      <VirtualizedList
        rowCount={createItems().length}
        rowHeight={50}
        rowRenderer={rowRenderer}
        width={200}
        height={500}
        noRowsRenderer={noRowsRenderer}
        style={{background: 'lightgray'}}
      />
    </div>
    <div style={{ marginLeft: '50px'}}>
      <h3>Empty list</h3>
      <p>Placeholder content can be rendered by providing a noRowsRenderer</p><br/>
      <VirtualizedList
        rowCount={0}
        rowHeight={50}
        rowRenderer={rowRenderer}
        width={200}
        height={500}
        noRowsRenderer={noRowsRenderer}
        style={{background: 'gray'}}
      />
    </div>
  </div>
};
