import * as React from 'react';
import { Avatar, BasicIndicator } from '../../../src/components/avatar';
import { mount } from 'enzyme';

describe('Avatar', () => {
  it('should render the content with correct class and without crash', () => {
    const wrapper = mount(
      <Avatar size="small" variant="square">
        <span style={{fontSize:'10px'}}>AB</span>
      </Avatar>
    )
    expect(wrapper.find('Avatar').length).toBe(1);
    expect(wrapper.find('div').hasClass('tk-avatar tk-avatar--small tk-avatar--square')).toBe(true)
  })

  it('should render indicator with the correct position class', () => {
    const wrapper = mount(
      <Avatar variant="round" size="xlarge">
        <img src={'some url'} alt="avatar"/>
        <BasicIndicator position="top" variant="attention"/>
      </Avatar>
    )
    expect(wrapper.find('BasicIndicator').length).toBe(1);
    expect(wrapper.find('span').hasClass('tk-avatar__badge tk-avatar__badge--top tk-bg-color--attention')).toBe(true);
  })
})
