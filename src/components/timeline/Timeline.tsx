import * as React from 'react'
import { useState, useCallback, useMemo, useEffect } from 'react';
import classNames from 'classnames';

import { DateTimeline } from './sub-component/DateTimeline';
import { ExpandCollapse } from './sub-component/ExpandCollapse';

import { TimelineProps, TimelineOptions, UseTimeLineResult } from './interfaces'

const prefix = 'tk-timeline';
const buildClass = (classStr: string) => `${prefix}__${classStr}`;

const Timeline = <T,>({
  onCollapseChange,
  items,
  itemHeaderRenderer,
  itemBodyRenderer,
  className,
  ...otherProps
}: TimelineProps<T>) => {
  return (
    <div
      className={classNames(prefix, className)} 
      {...otherProps}>
      {items.map((item) => {
        const itemBody = item.hasBody && itemBodyRenderer?.(item.value);
        const itemHeader = itemHeaderRenderer(item.value);
        return (
          <div
            className={classNames(buildClass('item'), {
              [buildClass('item--expandable')]: !!itemBody,
            })}
            onClick={itemBody ? () => onCollapseChange(item.time) : undefined}
            key={item.time}
          >
            <div className={buildClass('item-icon')}>{item.icon}</div>
            <DateTimeline time={item.time} />
            <div
              className={classNames(buildClass('item-contentWrapper'), {
                [buildClass('item-onlyHeader')]: !itemBody,
              })}
            >
              {itemBody ? (
                <ExpandCollapse expanded={item.expanded}>
                  {itemHeader}
                  {itemBody}
                </ExpandCollapse>
              ) : (
                itemHeader
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export function useTimeline<T>(
  opts: TimelineOptions<T> = { items: [], itemHeaderRenderer: () => '' }
): UseTimeLineResult<T> {
  const {
    items,
    itemHeaderRenderer,
    itemBodyRenderer,
    expanded = false,
  } = opts;
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    items.reduce(
      (acc, item) =>
        item.hasBody
          ? { ...acc, [item.time]: expanded || item.expanded}
          : acc,
      {}
    )
  );

  useEffect(() => {
    setExpandedItems((prev) =>
      items
        .filter((item) => item.hasBody)
        .reduce(
          (acc, item) => ({
            ...acc,
            [item.time]:
              typeof prev[item.time] !== 'undefined'
                ? prev[item.time]
                : item.expanded,
          }),
          {}
        )
    );
  }, [items]);

  const onCollapseChange = useCallback((time: string) => {
    setExpandedItems((prev) => ({ ...prev, [time]: !prev[time] }));
  }, []);

  const updateAllExpandedValue = useCallback(
    (expanded: boolean) => {
      setExpandedItems(
        items.reduce(
          (acc, item) =>
            item.hasBody ? { ...acc, [item.time]: expanded } : acc,
          {}
        )
      );
    },
    [items]
  );

  const collapseAll = useCallback(() => {
    updateAllExpandedValue(false);
  }, [updateAllExpandedValue]);

  const expandAll = useCallback(() => {
    updateAllExpandedValue(true);
  }, [updateAllExpandedValue]);

  const itemsWithExpandedValue = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        expanded: expandedItems[item.time],
      })),
    [items, expandedItems]
  );

  const isAllExpanded = useMemo(
    () => !itemsWithExpandedValue.some((item) => !item.expanded),
    [itemsWithExpandedValue]
  );

  return {
    Timeline,
    timelineProps: {
      items: itemsWithExpandedValue,
      itemHeaderRenderer,
      itemBodyRenderer,
      onCollapseChange,
    },
    collapseAll,
    expandAll,
    isAllExpanded,
  };
}

useTimeline.defaultProps = {
  expanded: false,
};
