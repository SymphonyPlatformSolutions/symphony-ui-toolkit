/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { withResizeDetector } from 'react-resize-detector';

interface ResizeDetectDivProps {
  children?: React.ReactNode;
  width: number;
  height: number;
  onResize?: (width: number, height: number) => any;
  onWidthChange?: (width: number) => any;
  onHeightChange?: (height: number) => any;
  targetRef?: any;
  className?: string;
}

export class ResizeDetectDivInternal extends React.Component<
  ResizeDetectDivProps
> {
  componentDidUpdate(prevProps: ResizeDetectDivProps) {
    const { width, height } = this.props;
    const widthChanged = width - prevProps.width;
    const heightChanged = height - prevProps.height;
    if (widthChanged && this.props.onWidthChange) {
      this.props.onWidthChange(width);
    }
    if (heightChanged && this.props.onHeightChange) {
      this.props.onHeightChange(height);
    }
    if ((heightChanged || widthChanged) && this.props.onResize) {
      this.props.onResize(width, height);
    }
  }
  render() {
    const {
      width,
      height,
      // eslint-disable-next-line react/prop-types
      children,
      onResize,
      onWidthChange,
      onHeightChange,
      targetRef,
      ...rest
    } = this.props;
    return <div {...rest}>{children}</div>;
  }
}

export default withResizeDetector(ResizeDetectDivInternal);
