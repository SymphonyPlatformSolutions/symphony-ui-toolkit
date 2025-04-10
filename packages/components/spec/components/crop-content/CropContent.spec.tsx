import { render, waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';
import * as React from 'react';
import CropContent from '../../../src/components/crop-content/CropContent';
import ResizeDetectDiv from '../../../src/core/hoc/ResizeDetectDiv';
import { vi } from 'vitest';

vi.mock('react-resize-detector', () => ({
  ...vi.importActual('react-resize-detector'),
  withResizeDetector: vi.fn((comp) => comp),
}));

// TODO this whole test should be migrated to testing library
/**
 * Util methods
 */
const mockText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

const getComponent = (props?) => {
  return (
    <CropContent {...props}>
      <div id="content">{mockText}</div>
    </CropContent>
  );
};

const getWrapper = (props?) => shallow(getComponent(props));

const getToggleLink = (wrapper) => {
  return wrapper.find('.tk-crop-content .toggle-container a');
};

const getToggleContainer = (wrapper) => {
  return wrapper.find('.tk-crop-content .toggle-container');
};
const getContentBlock = (wrapper) => {
  return wrapper.find('.tk-crop-content .content');
};

const simResize = (wrapper, scrollHeight, offsetHeight) => {
  (wrapper.instance() as CropContent)['containerElRef'] = {
    offsetHeight,
    scrollHeight,
  } as HTMLDivElement;
  (wrapper.find(ResizeDetectDiv).prop('onWidthChange') as any)();
};

describe('CropContent Component', () => {
  describe('should be created properly', () => {
    it('render with default props does not crash', () => {
      const wrapper = shallow(<CropContent></CropContent>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-crop-content')).toBe(true);
    });
    it('should init collapsed properly', () => {
      let wrapper = getWrapper({ initCollapsed: true });
      expect(wrapper.state('collapsed')).toBeTruthy();
      wrapper = getWrapper({ initCollapsed: false });
      expect(wrapper.state('collapsed')).toBeFalsy();
      wrapper = getWrapper();
      expect(wrapper.state('collapsed')).toBeTruthy();
    });
    it('should control the collapse logic from external', () => {
      const wrapper = getWrapper({ collapsed: true });
      expect(wrapper.state('collapsed')).toBeTruthy();
      wrapper.setProps({ collapsed: false });
      expect(wrapper.state('collapsed')).toBeFalsy();
    });
    it('content should crop at 80px by default', () => {
      const wrapper = getWrapper();
      simResize(wrapper, 100, 50);
      expect(getContentBlock(wrapper).prop('style').maxHeight).toBe('80px');
      expect(getToggleContainer(wrapper).length).toBe(1);
    });
    it('toggle should appear according to overflow state', () => {
      const wrapper = getWrapper();
      simResize(wrapper, 50, 100);
      expect(getToggleContainer(wrapper).length).toBe(0);
      simResize(wrapper, 100, 50);
      expect(getToggleContainer(wrapper).length).toBe(1);
    });
    it('toggle should switch state and height', () => {
      const onToggle = vi.fn();
      const wrapper = getWrapper({ onToggle });
      simResize(wrapper, 100, 50);
      expect(getToggleContainer(wrapper).length).toBe(1);
      getToggleLink(wrapper).simulate('click');
      expect(onToggle).toHaveBeenCalledWith(false, expect.anything());
      expect(getContentBlock(wrapper).prop('style').maxHeight).toBe('100px');
      getToggleLink(wrapper).simulate('click');
      expect(onToggle).toHaveBeenCalledWith(true, expect.anything());
    });
    it('should handle overflow on cropHeight change', () => {
      const wrapper = getWrapper();
      const computeStateSpy = vi.spyOn(
        wrapper.instance() as CropContent,
        'computeState'
      );
      wrapper.setProps({ cropHeight: '100px' });
      expect(computeStateSpy).toHaveBeenCalled();
    });
    it('should handle overflow only on collapsed state', () => {
      const wrapper = getWrapper();
      // mock overflow
      simResize(wrapper, 100, 50);
      // container expanded
      getToggleLink(wrapper).simulate('click');
      simResize(wrapper, 50, 100);
      expect((wrapper.instance().state as any).hasOverflow).toBeTruthy();

      // container collapsed
      getToggleLink(wrapper).simulate('click');
      simResize(wrapper, 50, 100);
      expect((wrapper.instance().state as any).hasOverflow).toBeFalsy();
    });

    // tests should be migrated like this one
    it('should refresh overflow on text manipulation', async () => {
      const rendered = render(getComponent(true));
      const content = document.getElementsByClassName(
        'content'
      )[0] as HTMLDivElement;
      // JSDOM doesn't actually render stuff we'll need to mock contents
      Object.defineProperty(content, 'offsetHeight', {
        configurable: true,
        value: 80,
      });
      Object.defineProperty(content, 'scrollHeight', {
        configurable: true,
        value: 100,
      });
      // should be triggered by text change
      content.innerHTML = mockText + mockText;
      expect((await rendered.findAllByText('Show more')).length).toBe(1);
    });

    it('should refresh overflow on dom manipulation', async () => {
      const rendered = render(getComponent(true));
      const content = document.getElementsByClassName(
        'content'
      )[0] as HTMLDivElement;
      const aux = document.createElement('div');

      Object.defineProperty(content, 'offsetHeight', {
        configurable: true,
        value: 80,
      });
      Object.defineProperty(content, 'scrollHeight', {
        configurable: true,
        value: 100,
      });
      content.appendChild(aux);
      await waitFor(() => {
        expect(rendered.getByText('Show more')).toBeInTheDocument();
      });

      Object.defineProperty(content, 'offsetHeight', {
        configurable: true,
        value: 180,
      });
      Object.defineProperty(content, 'scrollHeight', {
        configurable: true,
        value: 90,
      });
      content.removeChild(aux);
      await waitFor(() => {
        expect(rendered.queryByText('Show more')).not.toBeInTheDocument();
      });
    });
  });
});
