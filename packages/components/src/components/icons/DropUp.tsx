import * as React from 'react';
import { SVGProps } from 'react';
const SvgDropUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_DROP-UP"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11 11a1 1 0 0 0 .707-1.707l-3-3a1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 5 11h6Z" />
  </svg>
);
export default SvgDropUp;
