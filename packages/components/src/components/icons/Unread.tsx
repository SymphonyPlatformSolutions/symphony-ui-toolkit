import * as React from 'react';
import { SVGProps } from 'react';
const SvgUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_UNREAD"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM16 8.4v6.32c0 .458-.314.85-.768.913C14.183 15.782 11.965 16 8 16c-3.965 0-6.183-.218-7.232-.367C.314 15.57 0 15.178 0 14.72V5.281c0-.46.314-.85.768-.914C1.817 4.218 4.035 4 8 4h.022c.065.716.266 1.392.579 2.002L8 6c-1.343 0-2.475.026-3.42.064L8 9.485l1.861-1.86a5.496 5.496 0 0 0 1.776 1.052l-2.93 2.93a1 1 0 0 1-1.414 0L2 6.314v7.451c1.176.116 3.094.235 6 .235s4.824-.12 6-.235V8.978a5.465 5.465 0 0 0 2-.578Z" />
  </svg>
);
export default SvgUnread;
