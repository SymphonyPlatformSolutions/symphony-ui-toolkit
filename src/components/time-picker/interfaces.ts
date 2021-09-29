import { HasTooltipProps } from '../tooltip/interfaces';
import { HasValidationProps } from '../validation/interfaces';

export type TimePickerValue = string;

interface DisabledExactTime {
  time: string;
}

interface DisabledTimeRange {
  from: string;
  to: string;
}

export type DisabledTime = DisabledExactTime | DisabledTimeRange;

export type TimePickerProps = {
  id?: string;
  disabled?: boolean;
  disabledTimes?: DisabledTime | Array<DisabledTime>;
  format?: string;
  label?: string;
  min?: string;
  max?: string;
  name?: string;
  placeholder?: string;
  step?: number;
  strict?: boolean;
  value?: string;
  showRequired?: boolean;
} & HasValidationProps<TimePickerValue> &
  HasTooltipProps;
