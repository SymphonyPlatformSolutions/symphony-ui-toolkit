import * as React from 'react';
import { SVGProps } from 'react';
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_ZOOM-OUT"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11.414 6 14 3.414V6a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.586L10 4.586 11.414 6ZM2 12.586 4.586 10 6 11.414 3.414 14H6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v2.586ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </svg>
);
export default SvgZoomOut;
