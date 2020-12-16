import * as React from 'react';
import {mount} from 'enzyme';
import {DropdownMenu, DropdownMenuDivider, DropdownMenuItem} from '../../../src/components';

describe('DropdownMenu', () => {
  it('should render with the correct classes without crash', () => {
    const wrapper = mount(
      <DropdownMenu>
        <DropdownMenuItem>Hello world</DropdownMenuItem>
        <DropdownMenuDivider/>
        <DropdownMenuItem>Hello people</DropdownMenuItem>
      </DropdownMenu>
    )
    expect(wrapper.find('DropdownMenu').length).toBe(1);
    expect(wrapper.find('DropdownMenu').childAt(0).hasClass('tk-dropdown-menu')).toBe(true);
    expect(wrapper.find('DropdownMenuDivider').length).toBe(1);
    expect(wrapper.find('DropdownMenuDivider').find('div').hasClass('tk-dropdown-menu-divider')).toBe(true);
    expect(wrapper.find('DropdownMenuItem').length).toBe(2);
    expect(wrapper.find('DropdownMenuItem').find('div').forEach(d => d.hasClass('tk-dropdown-menu__item')));
  })
})
