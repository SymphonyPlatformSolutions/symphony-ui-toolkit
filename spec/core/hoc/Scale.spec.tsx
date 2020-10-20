import { shallow } from 'enzyme';
import React from 'react';
import Scale from '../../../src/core/hoc/Scale';

describe('Scale Component', () => {
  describe('Scale component test suite => ', () => {
    it('render with default props and initial value', () => {
      const wrapper = shallow(
        <Scale
          size="large"
        ></Scale>
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
