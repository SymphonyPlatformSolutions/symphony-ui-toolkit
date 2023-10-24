import * as React from 'react';
import { ResizeDetectDivInternal } from '../../../src/core/hoc/ResizeDetectDiv';
import { render } from '@testing-library/react';

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
    const { container } = render(
      <ResizeDetectDivInternal width={100} height={100} className="SOMECLASS">
        Text
      </ResizeDetectDivInternal>
    );
    const element = container.getElementsByClassName('SOMECLASS');
    expect(element.length).toBe(1);
  });

  it('should call width changed with new width', () => {
    const { rerender } = render(<ResizeDetectDivInternal
      width={100}
      height={100}
      onWidthChange={zone.onWidthChange}
      onHeightChange={zone.onHeightChange}
      onResize={zone.onResize}
      className="SOMECLASS"
    > Text </ResizeDetectDivInternal>);
    // simulate resize update, this is done by the withResizeDetector wrapper
    rerender(<ResizeDetectDivInternal
      width={50}
      height={100}
      onWidthChange={zone.onWidthChange}
      onHeightChange={zone.onHeightChange}
      onResize={zone.onResize}
      className="SOMECLASS"
    > Text </ResizeDetectDivInternal>)
    expect(spyWidth).toHaveBeenCalledWith(50);
    expect(spyResize).toHaveBeenCalledWith(50, 100);

    rerender(<ResizeDetectDivInternal
      width={50}
      height={50}
      onWidthChange={zone.onWidthChange}
      onHeightChange={zone.onHeightChange}
      onResize={zone.onResize}
      className="SOMECLASS"
    > Text </ResizeDetectDivInternal>)
    expect(spyHeight).toHaveBeenCalledWith(50);
    expect(spyResize).toHaveBeenCalledWith(50, 50);
  });

  it('should not call on change if no size change', () => {
    const { rerender } = render(<ResizeDetectDivInternal
      width={100}
      height={100}
      onWidthChange={zone.onWidthChange}
      onHeightChange={zone.onHeightChange}
      onResize={zone.onResize}
      className="SOMECLASS"
    >
        Text
    </ResizeDetectDivInternal>);
    rerender(<ResizeDetectDivInternal
      width={100}
      height={100}
      onWidthChange={zone.onWidthChange}
      onHeightChange={zone.onHeightChange}
      onResize={zone.onResize}
      className="SOMECLASS"
    > Text </ResizeDetectDivInternal>)
    expect(spyHeight).not.toHaveBeenCalled();
    expect(spyWidth).not.toHaveBeenCalled();
    expect(spyResize).not.toHaveBeenCalled();
  });

});
