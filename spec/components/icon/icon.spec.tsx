import { shallow } from 'enzyme';
import React from 'react';
import Icon from '../../../src/components/icon';

describe('Icon Component', () => {
  describe('Icon component test suite => ', () => {
    it('render with default props and initial value', () => {
      const id = 'UniqueID';
      const iconName = 'tk-ic-info-round';
      const description = 'Tooltip';
      const tooltipCloseLabel = 'CLOSE';
      const wrapper = shallow(
        <Icon
          id={id}
          iconName={iconName}
          description={description}
          tooltipCloseLabel={tooltipCloseLabel}
        ></Icon>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('Tooltip').length).toBe(1);
      expect(wrapper.find('Tooltip').prop('id')).toEqual(id);
      expect(wrapper.find('Tooltip').prop('description')).toEqual(description);
      expect(wrapper.find('Tooltip').prop('closeLabel')).toEqual(
        tooltipCloseLabel
      );
    });
  });
});
