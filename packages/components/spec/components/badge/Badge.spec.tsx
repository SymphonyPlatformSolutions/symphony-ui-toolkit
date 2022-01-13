import * as React from 'react';
import { shallow } from 'enzyme';

import {Badge} from '../../../src/components/badge';

describe('Badge Component', () => {
  it('render with default props does not crash', () => {
    const wrapper = shallow(<Badge>Text</Badge>);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.hasClass('tk-badge')).toBe(true);
    expect(wrapper.find('div').hasClass('tk-badge--default')).toBe(true);
  });
  it('render a variant', () => {
    const wrapper = shallow(<Badge variant="attention">Badge</Badge>);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').hasClass('tk-badge--attention')).toBe(true);
  });
});
