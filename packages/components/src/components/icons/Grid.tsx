import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_GRID"
    viewBox="0 0 17 18"
    {...props}
  >
    <path d="M3 1a2 2 0 0 0-2 2v3.008a2 2 0 0 0 2 2l3.005-.002a2 2 0 0 0 2-2V2.998a2 2 0 0 0-2-2zm3 2v3l-2.998.002v-3zM11.998.998a2 2 0 0 0-2 2l-.003 3.014a2 2 0 0 0 2 2l3.003-.006a2 2 0 0 0 2-2L17 2.992a2 2 0 0 0-2-2zm2.997 1.996L14.992 6l-2.994.006L12 3zM11.995 9.996a2 2 0 0 0-2 2l.003 3.01a2 2 0 0 0 2 2L15 17a2 2 0 0 0 2-2l-.002-3.01a2 2 0 0 0-2-2zm2.997 1.996.003 3.002L12 15l-.002-3.002zM2.995 10a2 2 0 0 0-2 2L1 15a2 2 0 0 0 2 2l3.016-.002a2 2 0 0 0 2-2l-.005-3a2 2 0 0 0-2-2zm3.01 2 .006 2.992-3.009.002-.005-2.992z" />
  </svg>
);
export default SvgGrid;
