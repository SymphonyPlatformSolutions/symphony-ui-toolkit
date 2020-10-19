import { shallow } from 'enzyme';
import React from 'react';
import Scale from '../../../src/core/hoc/Scale';

fdescribe('Scale Component', () => {
  fdescribe('Scale component test suite => ', () => {
    fit('render with default props and initial value', () => {
      const wrapper = shallow(
        <Scale
          size="x-small"
        ></Scale>
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
