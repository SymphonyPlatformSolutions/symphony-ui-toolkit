import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_INBOX"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.754 0a2 2 0 0 0-1.923 1.45L.077 7.59A2 2 0 0 0 0 8.14v5.325c0 .662.353 1.403 1.138 1.694C2.077 15.506 4.093 16 8 16s5.923-.494 6.862-.841c.785-.291 1.138-1.032 1.138-1.694V8.14q0-.28-.077-.55l-1.754-6.14A2 2 0 0 0 12.246 0zm0 2h8.492l1.428 5h-1.401a1.5 1.5 0 0 0-1.262.689L9.954 9.333H6.046L4.989 7.69A1.5 1.5 0 0 0 3.727 7H2.326zM2 9h1.454l1.057 1.645a1.5 1.5 0 0 0 1.262.688h4.454a1.5 1.5 0 0 0 1.262-.688L12.546 9H14v4.342c-.762.252-2.532.658-6 .658s-5.238-.406-6-.659z" />
  </svg>
);
export default SvgInbox;
