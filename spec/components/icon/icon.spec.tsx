import { shallow } from 'enzyme';
import React from 'react';
import Icon from '../../../src/components/icon';

describe('Icon Component', () => {
  describe('Icon component test suite => ', () => {
    it('render with default props and initial value', () => {
      const id = 'UniqueID';
      const iconName = 'tk-ic-info-round';
      const description = 'Tooltip';
      const closeLabel = 'CLOSE';
      const wrapper = shallow(
        <Icon
          iconName={iconName}
          tooltip={{
            id,
            description,
            closeLabel,
          }}
        ></Icon>
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
