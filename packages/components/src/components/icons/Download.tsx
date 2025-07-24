import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_DOWNLOAD"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M15 16a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2zM8.707 11.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L7 8.586V1a1 1 0 0 1 2 0v7.586l2.293-2.293a1 1 0 1 1 1.414 1.414z" />
  </svg>
);
export default SvgDownload;
