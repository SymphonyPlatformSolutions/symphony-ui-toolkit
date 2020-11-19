import { shallow } from 'enzyme';
import * as React from 'react';
import { ExpandableCard } from '../../../src/components';

/**
 * Util methods
 */

const getWrapper = (initCollapsed?) =>
  shallow(
    <ExpandableCard header={<h1>Header</h1>} initCollapsed={initCollapsed}>
      <div className="bodyContent">Body</div>
    </ExpandableCard>
  );

const getToggleLink = wrapper => {
  return wrapper.find('a.tk-link.toggle');
};

const getBodyDiv = wrapper => {
  return wrapper
    .find('div')
    .first()
    .childAt(1);
};

describe('CropContent Component', () => {
  describe('should be created properly', () => {
    it('render with default props does not crash', () => {
      const wrapper = getWrapper();
      expect(wrapper.length).toEqual(1);
      expect(getToggleLink(wrapper).length).toBe(1);
    });
    it('toggle should run properly', () => {
      const wrapper = getWrapper();
      expect(
        wrapper
          .find('div')
          .first()
          .childAt(1)
          .hasClass('collapsed')
      ).toBeTruthy();
      expect(getToggleLink(wrapper).text()).toEqual('EXPAND');
      getToggleLink(wrapper).simulate('click');
      expect(getBodyDiv(wrapper).hasClass('collapsed')).toBeFalsy();
      expect(getToggleLink(wrapper).text()).toEqual('COLLAPSE');
    });

    it('should init collapsed properly', () => {
      let wrapper = getWrapper(true);
      expect(getBodyDiv(wrapper).hasClass('collapsed')).toBeTruthy();
      wrapper = getWrapper(false);
      expect(getBodyDiv(wrapper).hasClass('collapsed')).toBeFalsy();
      wrapper = getWrapper();
      expect(getBodyDiv(wrapper).hasClass('collapsed')).toBeTruthy();
    });
  });
});
