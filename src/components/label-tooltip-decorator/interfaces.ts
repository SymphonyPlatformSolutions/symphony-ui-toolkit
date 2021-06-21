import * as PropTypes from 'prop-types';

export type LabelTooltipDecoratorProps = {
  id?: string;
  htmlFor?: string;
  label?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  tooltip?: string | JSX.Element;
  tooltipCloseLabel?: string;
  showRequired?: boolean;
};

export const LabelTooltipDecoratorPropTypes = {
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  tooltipCloseLabel: PropTypes.string,
};
