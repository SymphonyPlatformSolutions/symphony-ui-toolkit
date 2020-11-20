import { shallow } from 'enzyme';
import * as React from 'react';
import Loader from '../../../src/components/loader';

describe('Loader Component', () => {
  describe('Loader component test suite => ', () => {
    it('should render the component with default props', () => {
      const wrapper = shallow(<Loader/>);
      expect(wrapper.hasClass('tk-loader-spinner')).toBe(true);
    });
    it('should render extra props to the loader component', () => {
      const wrapper = shallow(<Loader variant="ok">Close me</Loader>);
      expect(wrapper.hasClass('tk-loader-spinner tk-loader--ok')).toBe(true);
    });
  });
}); 
