import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks'

import { useTimeline, TimeLineItem } from '../../../src/components/timeline';
import { Badge } from '../../../src/components/badge';
import Icon from '../../../src/components/icon/Icon';

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
  
const Header = (item: MyItem) => <div>{item.title}</div>;
const Body = (item: MyItem) => (
  <div data-testid="body">
    <div>
      <Badge variant="positive" className="tk-mb-h">{item.name}</Badge>
    </div>
    <div>
      <Badge variant="neutral">{item.price}</Badge>
    </div>
  </div>
);
  

describe('Timeline Component', () => {
  it('render Timeline', () => {
    const { result } = renderHook(() => useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
    }));
    const { Timeline, timelineProps, isAllExpanded } = result.current;

    expect(isAllExpanded).toEqual(false);
    const {container} = render(<Timeline {...timelineProps}/>);
    expect(container.firstChild).toHaveClass('tk-timeline');
  });

  it('isAllExpanded', async () => {
    const { result } = renderHook(() => useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
    }));
    expect(result.current.isAllExpanded).toEqual(false);
    const { Timeline, timelineProps } = result.current;
    let component = render(<Timeline {...timelineProps}/>);
    expect(component.container.firstChild).toHaveClass('tk-timeline');
    expect(result.current.isAllExpanded).toEqual(false);
    let body = await component.queryAllByTestId('body');
    expect(body.length).toBe(0);

    const { result: resultExpanded } = renderHook(() => useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
      expanded: true,
    }));
    expect(resultExpanded.current.isAllExpanded).toEqual(true);
    component = render(<Timeline {...resultExpanded.current.timelineProps}/>);
    body = await component.queryAllByTestId('body');
    expect(body.length).toBe(3);

  })

  it('expandAll', async () => {
    const { result } = renderHook(() => useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
    }));
    const { Timeline, timelineProps } = result.current;
    let component = render(<Timeline {...timelineProps}/>);
    expect(component.container.firstChild).toHaveClass('tk-timeline');
    expect(result.current.isAllExpanded).toEqual(false);
    let body = await component.queryAllByTestId('body');
    expect(body.length).toBe(0);

    expect(result.current.isAllExpanded).toEqual(false);

    act(() => {
      result.current.expandAll(); 
    })
      
    expect(result.current.isAllExpanded).toEqual(true);
    component = render(<Timeline {...result.current.timelineProps}/>);
    body = await component.queryAllByTestId('body');
    expect(body.length).toBe(3);
  })

  it('collapseAll', async () => {
    const { result } = renderHook(() => useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
      expanded: true,
    }));
    const { Timeline, timelineProps } = result.current;
    let component = render(<Timeline {...timelineProps}/>);
    expect(component.container.firstChild).toHaveClass('tk-timeline');
    expect(result.current.isAllExpanded).toEqual(true);
    let body = await component.queryAllByTestId('body');
    expect(body.length).toBe(3);

    act(() => {
      result.current.collapseAll(); 
    })
    component = render(<Timeline {...result.current.timelineProps}/>);
    expect(result.current.isAllExpanded).toEqual(false);
    body = await component.queryAllByTestId('body');
    expect(body.length).toBe(3);
  })

  it('expandAll then collapseAll', () => {
    const { result } = renderHook(() => useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
    }));
    expect(result.current.isAllExpanded).toEqual(false);

    act(() => {
      result.current.expandAll(); 
    })
    expect(result.current.isAllExpanded).toEqual(true);

    act(() => {
      result.current.collapseAll(); 
    })
    expect(result.current.isAllExpanded).toEqual(false);
  })

  it('render expanded timeline', async () => {
    
    const { result } = renderHook(() => useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
      expanded: true,
    }));
    const { Timeline, timelineProps, isAllExpanded } = result.current;
    expect(isAllExpanded).toEqual(true);
    const component = render(<Timeline {...timelineProps}/>);
    expect(component.container.firstChild).toHaveClass('tk-timeline');
    const body = await component.queryAllByTestId('body');
    expect(body.length).toBe(3);
    act(() => {
      result.current.collapseAll();
    })
    expect(result.current.isAllExpanded).toEqual(false);
  });

  it('Button to collapse and expand all', async () => {
    
    const { result } = renderHook(() => useTimeline<MyItem>({
      items: DATA,
      itemBodyRenderer: Body,
      itemHeaderRenderer: Header,
      expanded: true,
    }));
    const { Timeline, timelineProps, isAllExpanded, collapseAll, expandAll } = result.current;
    

    const component = render(<>
      <button data-testid="collapse-button" onClick={isAllExpanded ? collapseAll : expandAll} className="tk-mb-2h">
        {isAllExpanded ? 'COLLAPSE ALL' : 'EXPAND ALL'}
      </button>
      <Timeline {...timelineProps}/>
    </>);
    let body = await component.queryAllByTestId('body');
    const collapseButton = await component.getByTestId('collapse-button')

    expect(isAllExpanded).toEqual(true);
    expect(collapseButton.textContent).toBe('COLLAPSE ALL');
    expect(body.length).toBe(3);

    
    
    act(() => {
      // Click on the collapse button
      fireEvent.click(collapseButton);
    })

    component.rerender(<>
      <button data-testid="collapse-button" onClick={result.current.isAllExpanded ? collapseAll : expandAll} className="tk-mb-2h">
        {result.current.isAllExpanded ? 'COLLAPSE ALL' : 'EXPAND ALL'}
      </button>
      <Timeline {...result.current.timelineProps}/>
    </>)
    body = await component.queryAllByTestId('body');

    expect(result.current.isAllExpanded).toEqual(false);
    expect(collapseButton.textContent).toBe('EXPAND ALL');
    expect(body.length).toBe(0);

    act(() => {
      // Click on the collapse button
      fireEvent.click(collapseButton);
    })

    component.rerender(<>
      <button data-testid="collapse-button" onClick={result.current.isAllExpanded ? collapseAll : expandAll} className="tk-mb-2h">
        {result.current.isAllExpanded ? 'COLLAPSE ALL' : 'EXPAND ALL'}
      </button>
      <Timeline {...result.current.timelineProps}/>
    </>)
    body = await component.queryAllByTestId('body');

    expect(result.current.isAllExpanded).toEqual(true);
    expect(collapseButton.textContent).toBe('COLLAPSE ALL');
    expect(body.length).toBe(3);

  });
});
