import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

type ExpandableCardProps = {
  children?: React.ReactNode;
  header: React.ReactNode;
  className?: string;
  initCollapsed?: boolean;
};
// styled components, if it grows put in a sibling file
const HeaderDiv = styled.div`
  & > div {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 8px;
  }
  & > .tk-link.toggle {
    margin-left: 8px;
    text-decoration: none;
    display: inline-block;
  }
  & > .tk-icon-top {
    &::before {
      transition: transform 300ms ease-in-out;
    }
    &.collapsed::before {
      transform: rotate(180deg);
    }
    cursor: pointer;
  }
`;

const BodyDiv = styled.div`
  overflow: hidden;
  transition: max-height 300ms ease-in-out;
  &.collapsed {
    max-height: 0;
  }
`;

export default class ExpandableCard extends React.Component<
  ExpandableCardProps
> {
  public state = {
    collapsed:
      this.props.initCollapsed === undefined || this.props.initCollapsed
  };

  onToggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const collapsedClass = this.state.collapsed ? ' collapsed' : '';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { initCollapsed, header, children, ...rest } = this.props;
    return (
      <div {...rest}>
        <HeaderDiv>
          <div>{this.props.header}</div>
          &bull;
          <a className="tk-link toggle" onClick={this.onToggle.bind(this)}>
            {this.state.collapsed ? 'EXPAND' : 'COLLAPSE'}
          </a>
          <i
            className={'tk-icon-top' + collapsedClass}
            onClick={this.onToggle.bind(this)}
            aria-label="Toggle"
          ></i>
        </HeaderDiv>
        <BodyDiv className={collapsedClass}>{children}</BodyDiv>
      </div>
    );
  }

  static propTypes = {
    initCollapsed: PropTypes.bool,
    header: PropTypes.node.isRequired
  };
}
