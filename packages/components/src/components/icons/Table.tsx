import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_TABLE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 14.72c0 .458-.314.85-.768.913C14.184 15.782 11.965 16 8 16s-6.183-.218-7.232-.367C.314 15.57 0 15.179 0 14.72V1.281C0 .82.314.43.768.367 1.817.218 4.035 0 8 0s6.184.218 7.232.367c.454.064.768.455.768.914zM2 12v1.765c1.035.102 2.646.207 5 .23V12zm5-2V8H2v2zm2 2v1.995c2.354-.023 3.965-.128 5-.23V12zm5-2V8H9v2zm0-6H9v2h5zM2 6h5V4H2z" />
  </svg>
);
export default SvgTable;
