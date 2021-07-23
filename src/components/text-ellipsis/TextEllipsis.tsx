import * as React from 'react';
import Tooltip from '../tooltip';

type TextEllipsisProps = {
    /** Text that should be ellipsed */
    children?: React.ReactNode;

    /** How many rows the text should span before ellipsing */
    rows?: number;

    /** Should be same as children, for now separate */
    tooltipContent: string | JSX.Element;

    /** Needed? Add description */
    textRef?: React.RefObject<HTMLElement>;

    tooltipPlacement:
      | 'bottom'
      | 'left'
      | 'right'
      | 'top'
};

interface TextEllipsisState {
    showTooltip: boolean;
}

export class TextEllipsis extends React.Component<
    TextEllipsisProps,
    TextEllipsisState
> {
  
  constructor(props: TextEllipsisProps) {
    super(props);
    this.state = {
      showTooltip: false,
    };
  }

  public render() {
    const { showTooltip } = this.state;

    return (
      <Tooltip
        description={ this.renderTooltipContent()}
        placement={this.props.tooltipPlacement}
        open={showTooltip}
      >
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          data-testid="TEXT_ELLIPSIS_CONTAINER"
        >
          { this.props.children }
        </div>
      </Tooltip>
    );
  }

  private renderTooltipContent() {
    return (
      <span>
        {this.props.tooltipContent}
      </span>
    );
  }
  private handleMouseEnter = (event: React.SyntheticEvent) => {
    const element = event.currentTarget;
    const showTooltip = this.isTextTruncated(element);
    this.setState({ showTooltip })
  }

  private handleMouseLeave = () => {
    this.setState({ showTooltip: false });
  }

  private isTextTruncated(element: EventTarget & Element) {
    const { textRef } = this.props;
    if (textRef && textRef.current) {
      const { scrollWidth, clientWidth } = textRef.current;
      return scrollWidth > clientWidth;
    } else {
      const { scrollWidth, clientWidth } = element.children[0];
      return scrollWidth > clientWidth;
    }
  }
}
