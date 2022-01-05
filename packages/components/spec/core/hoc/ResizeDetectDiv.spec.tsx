/* eslint-disable @typescript-eslint/no-empty-function */

import { shallow } from 'enzyme';
import * as React from 'react';
import { ResizeDetectDivInternal } from '../../../src/core/hoc/ResizeDetectDiv';

describe('ResizeDetectDiv Component', () => {
  let zone, spyWidth, spyHeight, spyResize;
  beforeEach(() => {
    zone = {
      onWidthChange: () => {},
      onHeightChange: () => {},
      onResize: () => {}
    };
    spyWidth = jest.spyOn(zone, 'onWidthChange');
    spyHeight = jest.spyOn(zone, 'onHeightChange');
    spyResize = jest.spyOn(zone, 'onResize');
  });

  it('render with default props does not crash', () => {
    const wrapper = shallow(
      <ResizeDetectDivInternal width={100} height={100} className="SOMECLASS">
        Text
      </ResizeDetectDivInternal>
    );
    expect(wrapper.length).toEqual(1);
    expect(wrapper.hasClass('SOMECLASS')).toBe(true);
  });
  it('should call width changed with new width', () => {
    const wrapper = shallow(
      <ResizeDetectDivInternal
        width={100}
        height={100}
        onWidthChange={zone.onWidthChange}
        onHeightChange={zone.onHeightChange}
        onResize={zone.onResize}
        className="SOMECLASS"
      >
        Text
      </ResizeDetectDivInternal>
    );
    // simulate resize update, this is done by the withResizeDetector wrapper
    wrapper.setProps({ width: 50 });
    expect(spyWidth).toHaveBeenCalledWith(50);
    expect(spyResize).toHaveBeenCalledWith(50, 100);

    wrapper.setProps({ height: 50 });
    expect(spyHeight).toHaveBeenCalledWith(50);
    expect(spyResize).toHaveBeenCalledWith(50, 50);
  });
  it('should not call on change if no size change', () => {
    const wrapper = shallow(
      <ResizeDetectDivInternal
        width={100}
        height={100}
        onWidthChange={zone.onWidthChange}
        onHeightChange={zone.onHeightChange}
        onResize={zone.onResize}
        className="SOMECLASS"
      >
        Text
      </ResizeDetectDivInternal>
    );
    wrapper.setProps({ width: 100, height: 100 });
    expect(spyHeight).not.toHaveBeenCalled();
    expect(spyWidth).not.toHaveBeenCalled();
    expect(spyResize).not.toHaveBeenCalled();
  });
});
