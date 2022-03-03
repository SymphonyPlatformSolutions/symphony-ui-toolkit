import * as PropTypes from 'prop-types';
import { HasTooltipProps } from '../tooltip/interfaces';
import { HasValidationProps } from '../validation/interfaces';
import {
  HTMLInputProps,
  LabelValue,
  MenuPortalProps,
} from '../dropdown/interfaces';
import { Time } from './utils';

export type TimePickerValue = string;

interface DisabledExactTime {
  time: string;
}

interface DisabledTimeRange {
  from: string;
  to: string;
}

export type DisabledTime = DisabledExactTime | DisabledTimeRange;

export type TimePickerOption = LabelValue<
  string,
  {
    index: number;
    time: Time;
  }
>;

export type TimePickerProps = {
  id?: string;
  disabled?: boolean;
  /** Time or Range Time to disable. */
  disabledTimes?: DisabledTime | Array<DisabledTime>;
  /** Format of the time to write on the input field and to display the time in the Dropdown. Doesn’t affect value and disabled-time props format. */
  format?: string;
  /** Label that will be displayed on top of the Element. */
  label?: string;
  /** The earliest acceptable time with ISO_8601 format (HH:mm:ss). */
  min?: string;
  /** The latest acceptable time with ISO_8601 format (HH:mm:ss). */
  max?: string;
  /** Identifies the time picker. */
  name?: string;
  /** If null, then it will use the time format. */
  placeholder?: string;
  /** The step interval in seconds to be used to define the suggested times (min: 600, max: 43200, default: 900).*/
  step?: number;
  /** Enforce that the user cannot select a time that is not in the proposed list.*/
  strict?: boolean;
  /** Date with ISO_8601 format (HH:mm:ss). */
  value?: string;
  showRequired?: boolean;
  helperText?: string;
} & HTMLInputProps &
  MenuPortalProps &
  HasValidationProps<TimePickerValue> &
  HasTooltipProps;

export const TimePickerPropTypes = {
  disabled: PropTypes.bool,
  disabledTimes: PropTypes.array,
  format: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  menuPortalStyles: PropTypes.object,
  menuPortalTarget: PropTypes.instanceOf(HTMLElement),
  menuShouldBlockScroll: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onValidationChanged: PropTypes.func,
  placeholder: PropTypes.string,
  showRequired: PropTypes.bool,
  step: PropTypes.number,
  strict: PropTypes.bool,
  tooltip: PropTypes.string,
  tooltipCloseLabel: PropTypes.string,
  value: PropTypes.string,
};
