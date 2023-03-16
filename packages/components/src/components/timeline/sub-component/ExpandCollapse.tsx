import * as React from 'react';

import Icon from '../../icon/FontIcon';

export interface ExpandCollapseProps {
    children: React.ReactNode[];
    expanded?: boolean;
  }

const prefix = 'tk-timeline';
const buildClass = (classStr: string) => `${prefix}__${classStr}`;

export function ExpandCollapse({
  children: [header, content],
  expanded = false,
}: ExpandCollapseProps) {
  return (
    <div className={buildClass('collapse')}>
      <div className={buildClass('collapse--header-container')}>
        <Icon
          className={buildClass('collapse--icon')}
          iconName={expanded ? 'top' : 'bottom'}
        />
        <div className={buildClass('collapse--header')}>{header}</div>
      </div>
      {expanded ? (
        <div className={buildClass('collapse--body')}>{content}</div>
      ) : null}
    </div>
  );
}
