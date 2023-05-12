import * as React from 'react';
import { SVGProps } from 'react';
const SvgRecent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_RECENT"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-2 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0Z" />
    <path d="m7.293 8.707 2.123 2.125a1 1 0 1 0 1.415-1.413L9 7.586V4.5a1 1 0 0 0-2 0V8a.997.997 0 0 0 .293.707Z" />
  </svg>
);
export default SvgRecent;
