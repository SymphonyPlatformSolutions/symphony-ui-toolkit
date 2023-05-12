import * as React from 'react';
import { SVGProps } from 'react';
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_DELETE"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M10 2.043V2a2 2 0 1 0-4 .043c-1.915.086-3.183.279-3.802.395A1.472 1.472 0 0 0 1 3.89V7a1 1 0 0 0 1 1h.2l.71 7.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.8 8h.2a1 1 0 0 0 1-1V3.89c0-.684-.474-1.317-1.198-1.452-.62-.116-1.887-.309-3.802-.395ZM11.79 8l-.6 6H4.81l-.6-6h7.58ZM13 6H3V4.33C3.888 4.19 5.554 4 7.999 4H8c2.446 0 4.112.19 5 .33V6Z" />
  </svg>
);
export default SvgDelete;
