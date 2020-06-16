/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { withResizeDetector } from 'react-resize-detector';

interface ResizeDetectDivProps {
  width: number;
  height: number;
  onResize: (width: number, height: number) => any;
  onWidthChange: (width: number) => any;
  onHeightChange: (height: number) => any;
  targetRef: any;
}

class ResizeDetectDiv extends React.Component<ResizeDetectDivProps> {
  componentDidUpdate(prevProps: ResizeDetectDivProps) {
    const { width, height } = this.props;
    const widthChanged = width !== prevProps.width;
    const heightChanged = height !== prevProps.height;
    if (widthChanged && this.props.onWidthChange) {
      this.props.onWidthChange(width);
    }
    if (heightChanged && this.props.onHeightChange) {
      this.props.onHeightChange(width);
    }
    if ((heightChanged || widthChanged) && this.props.onResize) {
      this.props.onResize(width, height);
    }
  }
  render() {
    const {
      width,
      height,
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

export default withResizeDetector(ResizeDetectDiv);
