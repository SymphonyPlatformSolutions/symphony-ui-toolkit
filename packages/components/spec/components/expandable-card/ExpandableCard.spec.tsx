import { shallow } from 'enzyme';
import * as React from 'react';
import { ExpandableCard } from '../../../src/components';
import { vi } from 'vitest';

/**
 * Util methods
 */

const getWrapper = (props?) =>
  shallow(
    <ExpandableCard header={<h1>Header</h1>} {...props}>
      <div className="bodyContent">Body</div>
    </ExpandableCard>
  );

const getToggleLink = (wrapper) => {
  return wrapper.find('a.tk-link.toggle');
};

const getBodyDiv = (wrapper) => {
  return wrapper.find('div').first().childAt(1);
};

describe('CropContent Component', () => {
  describe('should be created properly', () => {
    it('render with default props does not crash', () => {
      const wrapper = getWrapper();
      expect(wrapper.length).toEqual(1);
      expect(getToggleLink(wrapper).length).toBe(1);
    });
    it('toggle should run properly', () => {
      const onToggle = vi.fn();
      const wrapper = getWrapper({ onToggle });
      expect(
        wrapper.find('div').first().childAt(1).hasClass('collapsed')
      ).toBeTruthy();
      expect(getToggleLink(wrapper).text()).toEqual('EXPAND');
      getToggleLink(wrapper).simulate('click');
      expect(getBodyDiv(wrapper).hasClass('collapsed')).toBeFalsy();
      expect(onToggle).toHaveBeenCalledWith(false, null);
      expect(getToggleLink(wrapper).text()).toEqual('COLLAPSE');
      getToggleLink(wrapper).simulate('click');
      expect(onToggle).toHaveBeenCalledWith(true, null);
    });

    it('should init collapsed properly', () => {
      let wrapper = getWrapper({ initCollapsed: true });
      expect(getBodyDiv(wrapper).hasClass('collapsed')).toBeTruthy();
      wrapper = getWrapper({ initCollapsed: false });
      expect(getBodyDiv(wrapper).hasClass('collapsed')).toBeFalsy();
      wrapper = getWrapper();
      expect(getBodyDiv(wrapper).hasClass('collapsed')).toBeTruthy();
    });
  });
});
