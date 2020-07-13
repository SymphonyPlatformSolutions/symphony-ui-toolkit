import { shallow } from 'enzyme';
import React from 'react';
import { InfoHint } from '../../../src/components';

describe('InfoHint Component', () => {
  describe('InfoHint component test suite => ', () => {
    it('render with default props and initial value', () => {
      const id = 'UniqueID';
      const description = 'Tooltip';
      const tooltipCloseLabel = 'CLOSE';
      const wrapper = shallow(
        <InfoHint
          id={id}
          description={description}
          tooltipCloseLabel={tooltipCloseLabel}
        ></InfoHint>
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
