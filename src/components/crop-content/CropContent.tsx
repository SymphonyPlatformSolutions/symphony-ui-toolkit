import * as React from 'react';
import classNames from 'classnames';
import ResizeDetectDiv from '../../core/utils/ResizeDetectDiv';

type CropContentProps = {
  children?: React.ReactNode;
  cropHeight?: string;
  className?: string;
  collapsed?: boolean;
};

export default class CropContent extends React.Component<CropContentProps> {
  private containerElRef: HTMLDivElement;

  public state = {
    cropHeight: this.props.cropHeight || '80px',
    collapsed: this.props.collapsed === undefined ? true : this.props.collapsed,
    hasOverflow: false
  };

  onToggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  componentDidMount() {
    // after first render check if component needs toggle
    this.handleWidthChange();
  }

  handleWidthChange() {
    if (this.state.collapsed) {
      const hasOverflow =
        this.containerElRef &&
        this.containerElRef.offsetHeight < this.containerElRef.scrollHeight;
      this.setState({ hasOverflow });
    }
  }

  render() {
    const height = this.state.collapsed ? `${this.state.cropHeight}` : '100vh';
    const contentClasses = classNames(
      { collapsed: this.state.collapsed },
      'content'
    );

    return (
      <ResizeDetectDiv
        onWidthChange={this.handleWidthChange.bind(this)}
        className={'tk-crop-content ' + this.props.className}
      >
        <div
          ref={el => {
            this.containerElRef = el;
          }}
          className={contentClasses}
          style={{ maxHeight: height }}
        >
          {this.props.children}
        </div>
        {/* this should only display if there's overflow or collapsed false */}
        {this.state.hasOverflow ? (
          <div className="toggle-container">
            <a
              onClick={() => {
                this.onToggle();
              }}
              className="tk-link"
            >
              Show {this.state.collapsed ? 'more' : 'less'}
            </a>
          </div>
        ) : null}
      </ResizeDetectDiv>
    );
  }
}
