import * as React from 'react';
import { SVGProps } from 'react';
const SvgChats = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_CHATS"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M4.997 0a3.499 3.499 0 0 0-3.301 4.66L.15 6.139A.484.484 0 0 0 0 6.5c.002.255.195.5.496.5h8.998a3.499 3.499 0 0 0 3.498-3.5c0-1.933-1.566-3.5-3.498-3.5H4.997Zm4.497 2a1.5 1.5 0 0 1 0 3H4.997a1.5 1.5 0 0 1 0-3h4.497ZM10.993 16a3.499 3.499 0 0 0 3.301-4.66l1.546-1.479A.5.5 0 0 0 15.494 9H6.496a3.499 3.499 0 0 0-3.498 3.5c0 1.933 1.566 3.5 3.498 3.5h4.497Zm-4.497-2a1.5 1.5 0 0 1 0-3h4.497a1.5 1.5 0 0 1 0 3H6.496Z" />
  </svg>
);
export default SvgChats;
