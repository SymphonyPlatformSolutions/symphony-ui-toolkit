import * as React from 'react';
import { SVGProps } from 'react';
const SvgRole = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_ROLE"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M4.5 3a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3h3A1.5 1.5 0 0 1 16 4.5V9a1 1 0 0 1-1 1v4.11c0 .684-.474 1.317-1.198 1.452-.814.152-2.748.438-5.802.438-3.054 0-4.988-.286-5.802-.438A1.472 1.472 0 0 1 1 14.11V10a1 1 0 0 1-1-1V4.5A1.5 1.5 0 0 1 1.5 3h3ZM3 13.67c.888.14 2.554.33 5 .33s4.112-.19 5-.33V10h-3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1H3v3.67ZM7.5 2a1 1 0 0 0-1 1h3a1 1 0 0 0-1-1h-1ZM2 5v3h4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h4V5H2Z" />
  </svg>
);
export default SvgRole;
