import { shallow } from 'enzyme';
import React from 'react';
import { Tooltip } from '../../../src/components';

describe('Tooltip Component', () => {
  describe('Tooltip component test suite => ', () => {
    it('render with default props and initial value', () => {
      const zone = {
        onClick: () => null,
      };
      const click = jest.spyOn(zone, 'onClick');
      const id = 'UniqueID';
      const description = 'Tooltip';
      const closeLabel = 'CLOSE';
      const visible = true;
      const referenceElement = {};
      const wrapper = shallow(
        <Tooltip
          id={id}
          description={description}
          closeLabel={closeLabel}
          visible={visible}
          onHintClose={zone.onClick}
          referenceElement={referenceElement}
        ></Tooltip>
      );
      expect(wrapper.find('.tk-tooltip').length).toBe(1);
      expect(wrapper.find('.tk-tooltip').prop('id')).toEqual(id);
      expect(wrapper.find('.tk-tooltip').childAt(0).text()).toEqual(
        description
      );
      expect(wrapper.find('.tk-tooltip__footer').text()).toEqual(closeLabel);
      wrapper
        .find('.tk-tooltip__close')
        .simulate('click', { target: { value: '' } });
      expect(click).toHaveBeenCalledTimes(1);
    });
  });
});
