import * as React from 'react';
import VirtualizedList from '../../../src/components/virtualized-list';
import { render } from '@testing-library/react';

describe('virtualized-list Component', () => {
  it('renders without crash', () => {
    const rowRenderer = () => (<div>Hello, World</div>)
    render(<VirtualizedList height={200} rowHeight={40} rowCount={5} width={50} rowRenderer={rowRenderer}/>);
  })
  it('forwards props to the virtualized-list element', () => {
    const rowRenderer = () => (<div>Hello, World</div>)
    const style = { background: 'gray' };
    const { container } = render(<VirtualizedList height={200} rowHeight={40} rowCount={5} width={50} rowRenderer={rowRenderer} style={style}/>);
    expect(container.firstChild).toHaveStyle(style);
  })
})
