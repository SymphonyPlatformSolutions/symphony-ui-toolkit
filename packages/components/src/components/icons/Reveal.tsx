import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReveal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_REVEAL"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11.023 8c0 1.657-1.353 3-3.023 3S4.977 9.657 4.977 8 6.33 5 8 5s3.023 1.343 3.023 3M9.008 8c0-.552-.451-1-1.008-1s-1.008.448-1.008 1S7.443 9 8 9s1.008-.448 1.008-1" />
    <path d="M8 1c4.111 0 7.504 3.054 8 7-.496 3.946-3.889 7-8 7S.496 11.946 0 8c.496-3.946 3.889-7 8-7m0 12c2.996 0 5.485-2.163 5.964-5-.48-2.837-2.969-5-5.964-5S2.515 5.163 2.037 8c.478 2.837 2.967 5 5.963 5" />
  </svg>
);
export default SvgReveal;
