import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckboxIndeterminate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_CHECKBOX-INDETERMINATE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm3 4a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1" />
  </svg>
);
export default SvgCheckboxIndeterminate;
