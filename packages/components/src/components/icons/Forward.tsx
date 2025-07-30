import * as React from 'react';
import type { SVGProps } from 'react';
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_FORWARD"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M9.298 2.707a1 1 0 0 1 1.413-1.414l4.996 5a.997.997 0 0 1-.005 1.42l-4.991 4.994a.999.999 0 1 1-1.413-1.414L12.588 8h-6.58c-1.142 0-1.898.355-2.43.836-.553.5-.93 1.198-1.178 1.97a9 9 0 0 0-.384 2.16 10 10 0 0 0-.009.955v.009a1 1 0 0 1-1.993.141L1.011 14l-.997.071v-.011l-.002-.021a5 5 0 0 1-.01-.325c-.004-.212-.002-.51.02-.867.041-.708.16-1.672.475-2.653.314-.978.842-2.03 1.741-2.842C3.158 6.52 4.4 6 6.008 6h6.58z" />
  </svg>
);
export default SvgForward;
