import * as React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

type ExpandableCardProps = {
  children?: React.ReactNode;
  /** Content of the header */
  header: React.ReactNode;
  /** Optional CSS class name */
  className?: string;
  /** If true, the expandable card will be collapsed initially. */
  initCollapsed?: boolean;
  /** Method triggered when clicking on "EXPAND/COLLAPSE" return the collapsed boolean and the element itself*/
  onToggle?: (collapsed: boolean, el?: HTMLDivElement) => any;
};
// styled components, if it grows put in a sibling file
const HeaderDiv = styled.div`
  margin-bottom: 8px;
  & > div {
    display: inline;
    margin-right: 8px;
    & > * {
      display: inline;
    }
  }
  & > .tk-link.toggle {
    margin-left: 8px;
    text-decoration: none;
    display: inline;
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

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  children,
  className,
  header,
  initCollapsed,
  onToggle,
  ...rest
}: ExpandableCardProps) => {
  const [collapsed, setCollasped] = useState(
    initCollapsed === undefined || initCollapsed
  );
  const [refEl, setRefEl] = useState(null);

  const onToggleHeader = () => {
    const reverseCollapsed = !collapsed;
    setCollasped(reverseCollapsed);

    if (onToggle) {
      onToggle(reverseCollapsed, refEl);
    }
  };

  return (
    <div className={className} ref={setRefEl} {...rest}>
      <HeaderDiv>
        <div>{header}</div>
        &bull;
        <a className={classNames('tk-link toggle')} onClick={onToggleHeader}>
          {collapsed ? 'EXPAND' : 'COLLAPSE'}
        </a>
        <i
          className={classNames('tk-icon tk-icon-top', { collapsed })}
          onClick={onToggleHeader}
          aria-label="Toggle"
        ></i>
      </HeaderDiv>
      <BodyDiv className={classNames({ collapsed })}>{children}</BodyDiv>
    </div>
  );
};

ExpandableCard.propTypes = {
  initCollapsed: PropTypes.bool,
  header: PropTypes.node.isRequired,
};

ExpandableCard.defaultProps = {
  initCollapsed: true,
};

export default ExpandableCard;