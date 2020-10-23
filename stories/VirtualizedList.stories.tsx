import *  as React from 'react';
import VirtualizedList from '../src/components/virtualized-list';
import Button from '../src/components/button';
import Icon from '../src/components/icon';


function createItems() {
  const items = []
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
          {item.status === 'ongoing' ? <Icon iconName={'call'}/> : <Icon iconName={'calendar'}/>}
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

export const Lists: React.FC = () => (
  <div style = {{display: 'flex'}}>
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
);

export default {
  title: 'VirtualizedList',
  component: Lists,
}

