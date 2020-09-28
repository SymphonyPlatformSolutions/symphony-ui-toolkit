import { shallow } from 'enzyme';
import React from 'react';
import Icon from '../../../src/components/icon';

describe('Icon Component', () => {
  describe('Icon component test suite => ', () => {
    it('render with default props and initial value', () => {
      const iconName = 'tk-icon-round';
      const wrapper = shallow(
        <Icon
          iconName={iconName}
        ></Icon>
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
