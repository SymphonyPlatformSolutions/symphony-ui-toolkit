import * as React from 'react';
import { SVGProps } from 'react';
const SvgReveal = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M11.023 8c0 1.657-1.353 3-3.023 3-1.67 0-3.023-1.343-3.023-3S6.33 5 8 5c1.67 0 3.023 1.343 3.023 3ZM9.008 8c0-.552-.451-1-1.008-1-.557 0-1.008.448-1.008 1S7.443 9 8 9c.557 0 1.008-.448 1.008-1Z" />
    <path d="M8 1c4.111 0 7.504 3.054 8 7-.496 3.946-3.889 7-8 7-4.111 0-7.504-3.054-8-7 .496-3.946 3.889-7 8-7Zm0 12c2.995 0 5.485-2.163 5.963-5C13.486 5.163 10.996 3 8 3S2.515 5.163 2.037 8c.478 2.837 2.967 5 5.963 5Z" />
  </svg>
);
export default SvgReveal;
