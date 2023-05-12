import * as React from 'react';
import { SVGProps } from 'react';
const SvgFormat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_FORMAT"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3.188a.812.812 0 0 1-1.613.134L12 3H9.25v10l2.071.387A.812.812 0 0 1 11.188 15H4.812a.812.812 0 0 1-.133-1.613L6.72 13V3H4l-.387 2.322A.812.812 0 0 1 2 5.188V2Z" />
  </svg>
);
export default SvgFormat;
