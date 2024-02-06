import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import { clsx } from 'clsx';

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

const prefix = 'tk-expandable-card';
const buildClass = (classStr: string) => `${prefix}__${classStr}`;

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
    <div className={clsx(prefix, className)} ref={setRefEl} {...rest}>
      <div className={clsx(buildClass('header'))}>
        <div>{header}</div>
        &bull;
        <a className={clsx('tk-link toggle')} onClick={onToggleHeader}>
          {collapsed ? 'EXPAND' : 'COLLAPSE'}
        </a>
        <i
          className={clsx('tk-icon-top', { collapsed })}
          onClick={onToggleHeader}
          aria-label="Toggle"
        ></i>
      </div>
      <div className={clsx(buildClass('body'), { collapsed })}>{children}</div>
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
