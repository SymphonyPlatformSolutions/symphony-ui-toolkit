interface DisabledExactTime {
  time: string;
}

interface DisabledTimeRange {
  from: string;
  to : string;
}

export type DisabledTime = DisabledExactTime | DisabledTimeRange;
