import * as React from 'react';
import { List, ListProps } from 'react-virtualized';

const VirtualizedList: React.FC<ListProps> = ({
  width,
  height,
  rowCount,
  rowHeight,
  rowRenderer,
  ...rest
}: ListProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <List
      rowCount={rowCount}
      rowHeight={rowHeight}
      width={width}
      height={height}
      rowRenderer={rowRenderer}
      {...rest}
    />
  );
}

export default VirtualizedList;
