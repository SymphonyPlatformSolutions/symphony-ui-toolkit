import * as React from 'react';
import { SVGProps } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_BOOKMARK"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="m8 12.87 4.445 2.96A1 1 0 0 0 14 15V1.615c0-.378-.216-.72-.574-.844C12.572.477 10.763 0 8 0 5.237 0 3.428.477 2.574.772 2.216.895 2 1.238 2 1.616V15a1 1 0 0 0 1.555.832L8 12.87Zm-4 .263V2.434c.85-.21 2.181-.436 4-.436s3.151.225 4 .436v10.699l-4-2.665-4 2.665Z" />
  </svg>
);
export default SvgBookmark;
