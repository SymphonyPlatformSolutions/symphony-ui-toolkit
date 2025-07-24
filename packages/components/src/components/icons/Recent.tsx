import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRecent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_RECENT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-2 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0" />
    <path d="m7.293 8.707 2.123 2.125a1 1 0 1 0 1.415-1.413L9 7.586V4.5a1 1 0 0 0-2 0V8a1 1 0 0 0 .293.707" />
  </svg>
);
export default SvgRecent;
