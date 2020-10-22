import * as React from 'react';
import { shallow } from 'enzyme';
import Link from '../../../src/components/link';

describe('Link', () => {
  it('should render with the correct class without crash', () => {
    const wrapper = shallow(<Link url={'#'}/>)
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.hasClass('tk-link')).toBe(true);
  });
});
