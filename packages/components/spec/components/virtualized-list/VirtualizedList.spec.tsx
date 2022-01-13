import * as React from 'react';
import { shallow } from 'enzyme';
import VirtualizedList from '../../../src/components/virtualized-list';

describe('virtualized-list Component', () => {
  it('renders without crash', () => {
    const rowRenderer = () => (<div>Hello, World</div>)
    const wrapper = shallow(<VirtualizedList height={200} rowHeight={40} rowCount={5} width={50} rowRenderer={rowRenderer}/>);
    expect(wrapper.find('List').length).toBe(1);
  })
  it('forwards props to the virtualized-list element', () => {
    const rowRenderer = () => (<div>Hello, World</div>)
    const style = { background: 'gray' };
    const wrapper = shallow(
      <VirtualizedList height={200} rowHeight={40} rowCount={5} width={50} rowRenderer={rowRenderer} style={style}/>
    );
    expect(wrapper.find('List').prop('style')).toBe(style);
  })
})
