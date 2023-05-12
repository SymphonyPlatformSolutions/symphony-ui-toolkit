import * as React from 'react';
import { SVGProps } from 'react';
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_TABLE"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 14.72c0 .458-.314.85-.768.913C14.184 15.782 11.965 16 8 16c-3.965 0-6.183-.218-7.232-.367C.314 15.57 0 15.178 0 14.72V1.281C0 .82.314.43.768.367 1.817.218 4.035 0 8 0c3.965 0 6.184.218 7.232.367.454.064.768.455.768.914v13.438ZM2 12v1.765c1.035.102 2.646.207 5 .23V12H2Zm5-2V8H2v2h5Zm2 2v1.995c2.354-.023 3.965-.128 5-.23V12H9Zm5-2V8H9v2h5Zm0-6H9v2h5V4ZM2 6h5V4H2v2Z" />
  </svg>
);
export default SvgTable;
