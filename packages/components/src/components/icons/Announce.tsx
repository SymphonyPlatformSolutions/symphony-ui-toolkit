import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAnnounce = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_ANNOUNCE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M4 11.005v3.996a1 1 0 1 0 2 0v-3.235l8.34 3.172c.397.152.82.013.955-.39.294-.885.705-2.867.705-7.043s-.413-6.164-.708-7.052c-.135-.406-.56-.545-.96-.393L4 4.005h-.007l-2.752.206a1.09 1.09 0 0 0-.973.798C.185 5.305 0 6.125 0 7.505s.185 2.196.268 2.491c.132.469.54.761.97.795l2.753.214zm9.696-8.56c.16 1.024.304 2.627.304 5.06 0 2.428-.144 4.027-.302 5.05L6 9.626V5.382zM4 9l-1.92-.15C2.037 8.53 2 8.083 2 7.505c0-.579.038-1.028.08-1.35L4 6.01z" />
  </svg>
);
export default SvgAnnounce;
