import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckboxIndeterminate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_CHECKBOX-INDETERMINATE"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Zm3 4a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Z" />
  </svg>
);
export default SvgCheckboxIndeterminate;
