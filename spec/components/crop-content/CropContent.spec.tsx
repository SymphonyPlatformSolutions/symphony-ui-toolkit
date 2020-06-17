import React from 'react';
import { shallow } from 'enzyme';

import CropContent from '../../../src/components/crop-content/CropContent';

const getWrapper = () =>
  shallow(
    <CropContent>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </CropContent>
  );

const getToggleLink = wrapper => {
  return wrapper.find('.tk-crop-content .toggle-container a');
};

const getToggleContainer = wrapper => {
  return wrapper.find('.tk-crop-content .toggle-container');
};
const getContentBlock = wrapper => {
  return wrapper.find('.tk-crop-content .content');
};
describe('CropContent Component', () => {
  describe('should be created properly', () => {
    it('render with default props does not crash', () => {
      const wrapper = shallow(<CropContent></CropContent>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-crop-content')).toBe(true);
    });
    it('content should crop at 80px by default', () => {
      const wrapper = getWrapper();
      wrapper.setState({ hasOverflow: true });
      expect(getContentBlock(wrapper).prop('style').maxHeight).toBe('80px');
      expect(getToggleContainer(wrapper).length).toBe(1);
    });
    it('toggle should appear according to overflow state', () => {
      const wrapper = getWrapper();
      expect(getToggleContainer(wrapper).length).toBe(0);
      wrapper.setState({ hasOverflow: true });
      expect(getToggleContainer(wrapper).length).toBe(1);
    });
    it('toggle should switch state and height', () => {
      const wrapper = getWrapper();
      wrapper.setState({ hasOverflow: true });
      expect(getToggleContainer(wrapper).length).toBe(1);
      getToggleLink(wrapper).simulate('click');
      expect(getContentBlock(wrapper).prop('style').maxHeight).toBe('100vh');
    });
    it('should handle overflow on cropHeight change', () => {
      const wrapper = getWrapper();
      const handleOverflowSpy = jest.spyOn(
        wrapper.instance() as CropContent,
        'handleOverflow'
      );
      wrapper.setProps({ cropHeight: 100 });
      expect(handleOverflowSpy).toHaveBeenCalled();
    });
    it('should handle overflow only on collapsed state', () => {
      const wrapper = getWrapper();
      wrapper.setState({ hasOverflow: true });
      getToggleLink(wrapper).simulate('click');

      const setStateSpy = jest.spyOn(wrapper.instance(), 'setState');

      (wrapper.instance() as CropContent).handleOverflow();
      expect(setStateSpy).not.toHaveBeenCalled();

      getToggleLink(wrapper).simulate('click');
      (wrapper.instance() as CropContent).handleOverflow();
      expect(setStateSpy).toHaveBeenCalled();
    });
  });
});
