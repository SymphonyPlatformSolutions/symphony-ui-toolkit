import { shallow } from 'enzyme';
import React from 'react';
import Typography from '../../../src/components/typography';

describe('Typography Component', () => {
  describe('Typography component test suite => ', () => {
    it('should render the component with default props', () => {
      const wrapper = shallow(<Typography>Body text</Typography>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-typography tk-typography--')).toBe(true);
    });
    it('should render extra props to the typography component', () => {
      const wrapper = shallow(<Typography tag="h1" variant="bold">Close me</Typography>);
      expect(wrapper.hasClass('tk-typography tk-typography--h1 tk-typography--bold')).toBe(true);
    });
  });
}); 
