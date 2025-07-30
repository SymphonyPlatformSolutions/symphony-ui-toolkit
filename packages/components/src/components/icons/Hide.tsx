import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_HIDE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1.005 3.042a1 1 0 0 1 1.243.673 6.003 6.003 0 0 0 11.504 0 1 1 0 1 1 1.917.57 8 8 0 0 1-1.17 2.38L15.8 8.4a1 1 0 1 1-1.6 1.2l-1.086-1.448a8 8 0 0 1-1.944 1.195l.779 2.337a1 1 0 1 1-1.898.632l-.804-2.413a8 8 0 0 1-2.494 0l-.804 2.413a1 1 0 0 1-1.898-.632l.78-2.337a8 8 0 0 1-1.945-1.195L1.8 9.6A1 1 0 0 1 .2 8.4l1.3-1.734a8 8 0 0 1-1.169-2.38 1 1 0 0 1 .674-1.244" />
  </svg>
);
export default SvgHide;
