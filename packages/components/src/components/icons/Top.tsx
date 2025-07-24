import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_TOP"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M12.707 10.707a1 1 0 0 1-1.414 0L8 7.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414" />
  </svg>
);
export default SvgTop;
