import * as React from 'react';
import ResizeDetectDiv from '../../core/hoc/ResizeDetectDiv';

type CropContentProps = {
  children?: React.ReactNode;
   /** Height of crop; this property determines the number of visible lines. */
  cropHeight?: string;
  /** Optional CSS class name */
  className?: string;
  /** If true, the crop will be collapsed initially. */
  initCollapsed?: boolean;
  /** Optional inline style */
  style?: React.CSSProperties;
  /** Method triggered when clicking on "Show more/less" return the collapsed boolean and the element itself */
  onToggle?: (collapsed: boolean, el?: HTMLDivElement) => any;
};

export default class CropContent extends React.Component<CropContentProps> {
  private containerElRef:HTMLDivElement;
  private mutationObserver: MutationObserver;

  public state = {
    collapsed:
      this.props.initCollapsed === undefined || this.props.initCollapsed,
    hasOverflow: false
  };

  constructor(props){
    super(props);
    //listen for mutations and update accordingly
    this.mutationObserver = new MutationObserver((mutations:MutationRecord[]) => {
      if(mutations?.some(mut => mut.type==='childList' || mut.type==='characterData')){
        this.handleOverflow();
      }
    });
  }

  onToggle() {
    const { onToggle } = this.props;
    const { collapsed } = this.state;
    
    const reverseCollapsed = !collapsed;
    this.setState({ collapsed: reverseCollapsed });

    if (onToggle) {
      onToggle(reverseCollapsed, this.containerElRef);
    }
  }

  componentDidMount() {
    // after first render check if component needs toggle
    this.handleOverflow();
  }

  setRef = (e: HTMLDivElement) => {
    if(e){
      this.containerElRef = e;
      this.mutationObserver.observe(e, {childList:true, subtree:true , characterData:true});
      this.handleOverflow();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cropHeight !== this.props.cropHeight) {
      this.handleOverflow();
    }
  }
  componentWillUnmount(){
    this.mutationObserver.disconnect();
  }

  handleOverflow() {
    if (this.state.collapsed) {
      const hasOverflow =
        this.containerElRef &&
        this.containerElRef.scrollHeight - this.containerElRef.offsetHeight > 1;
      this.setState({ hasOverflow });
    }
  }

  render() {
    const collapsedHeight = `${this.props.cropHeight || '80px'}`
    const fullHeight = (this.containerElRef && this.containerElRef.scrollHeight ? `${this.containerElRef.scrollHeight}px` : '100%');

    const height = this.state.collapsed
      ? collapsedHeight
      : fullHeight;

    return (
      <ResizeDetectDiv
        onWidthChange={this.handleOverflow.bind(this)}
        className={'tk-crop-content ' + this.props.className}
        style={this.props.style}
      >
        <div
          ref={this.setRef}
          className="content"
          style={{ maxHeight: height }}
        >
          {this.props.children}
        </div>
        {/* this should only display if there's overflow or collapsed false */}
        {this.state.hasOverflow ? (
          <div className="toggle-container">
            <a onClick={this.onToggle.bind(this)} className="tk-link">
              Show {this.state.collapsed ? 'more' : 'less'}
            </a>
          </div>
        ) : null}
      </ResizeDetectDiv>
    );
  }

  static defaultProps = {
    cropHeight: '80px',
    initCollapsed: true
  };
}
