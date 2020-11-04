import * as React from 'react';
import { mount } from 'enzyme';
import { Modal } from '../../../src/components';

describe('Modal', () => {
  it('should render the content with correct class and without crash', () => {
    const header = <h1>Hello, World</h1>;
    const wrapper = mount(<Modal size={'small'} header={header}/>);
    expect(wrapper.find('Modal').length).toBe(1);
    expect(wrapper.children().hasClass('tk-dialog-backdrop')).toBe(true);
    expect(wrapper.children().children().hasClass('tk-dialog tk-dialog--small')).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Hello, World');
  })
});
