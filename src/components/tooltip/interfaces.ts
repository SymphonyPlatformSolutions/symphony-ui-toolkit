// Every component that want to use the Tooltip component should have this HasTooltipProps props
export type HasTooltipProps = {
  /** Content text inside the tooltip */
  tooltip?: string | JSX.Element;
  /** Text of the CTA to close the tooltip */
  tooltipCloseLabel?: string;
};
