import * as React from 'react';
import { SVGProps } from 'react';
const SvgBusySmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_BUSY-SMALL"
    width="1em"
    height="1em"
    viewBox="0 0 10 10"
    {...props}
  >
    <path d="M.366 1.415a1.425 1.425 0 0 1 1.05-1.05C2.1.195 3.258 0 5 0c1.74 0 2.9.194 3.585.366.525.131.918.524 1.05 1.05C9.805 2.1 10 3.258 10 5c0 1.74-.194 2.9-.366 3.585a1.425 1.425 0 0 1-1.05 1.05C7.9 9.805 6.742 10 5 10c-1.74 0-2.9-.194-3.585-.366a1.425 1.425 0 0 1-1.05-1.05C.195 7.9 0 6.742 0 5c0-1.74.194-2.9.366-3.585ZM7.5 5.875a.875.875 0 1 0 0-1.75h-5a.875.875 0 1 0 0 1.75h5Z" />
  </svg>
);
export default SvgBusySmall;
