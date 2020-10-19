import { shallow } from 'enzyme';
import React from 'react';
import Scale, { Sizes } from '../../../src/core/hoc/Scale';

describe('Scale Component', () => {
  describe('Scale component test suite => ', () => {
    it('render with default props and initial value', () => {
      const wrapper = shallow(
        <Scale
          size={Sizes.MEDIUM}
        ></Scale>
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
