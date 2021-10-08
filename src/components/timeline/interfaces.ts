export interface TimelineOptions<T> {
  items: TimeLineItem<T>[];
  expanded?: boolean;
  itemHeaderRenderer: (item?: T) => React.ReactNode | string;
  itemBodyRenderer?: (item?: T) => React.ReactNode;
}

export interface TimeLineItem<T> {
  icon?: React.ReactNode;
  time: string;
  value?: T;
  expanded?: boolean;
  hasBody: boolean;
}

export interface UseTimeLineResult<T> {
  isAllExpanded: boolean;
  collapseAll: () => void;
  expandAll: () => void;
  timelineProps: TimelineProps<T>;
  Timeline: React.FC<TimelineProps<T>>;
}

export interface TimelineProps<T> extends React.HTMLProps<HTMLDivElement> {
  onCollapseChange: (time: string) => void;
  items: TimeLineItem<T>[];
  itemHeaderRenderer: (item?: T) => React.ReactNode | string;
  itemBodyRenderer?: (item?: T) => React.ReactNode;
}
