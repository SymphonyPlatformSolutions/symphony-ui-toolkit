import * as React from 'react';
import { SVGProps } from 'react';
const SvgRedirect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_REDIRECT"
    width="1em"
    height="1em"
    viewBox="0 0 16 14"
    {...props}
  >
    <path d="M9.298 1.707A1 1 0 0 1 10.71.293l4.996 5a.997.997 0 0 1-.005 1.42l-4.991 4.994a.999.999 0 1 1-1.413-1.414L12.588 7h-6.58c-1.142 0-1.898.355-2.43.836-.553.5-.93 1.198-1.178 1.97a8.945 8.945 0 0 0-.384 2.16 9.718 9.718 0 0 0-.009.955V12.93a1 1 0 0 1-1.993.141L1.011 13l-.997.071v-.011l-.002-.021a5.379 5.379 0 0 1-.01-.325c-.004-.212-.002-.51.02-.867.041-.708.16-1.672.475-2.653.314-.978.842-2.03 1.741-2.842C3.158 5.52 4.4 5 6.008 5h6.58l-3.29-3.293Z" />
  </svg>
);
export default SvgRedirect;
