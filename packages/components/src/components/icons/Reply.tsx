import * as React from 'react';
import { SVGProps } from 'react';
const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_REPLY"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M6.702 2.707A1 1 0 0 0 5.29 1.293l-4.996 5a.997.997 0 0 0 .005 1.42l4.991 4.994a.999.999 0 1 0 1.413-1.414L3.412 8h6.58c1.142 0 1.898.355 2.43.836.553.5.93 1.198 1.178 1.97.247.769.348 1.555.384 2.16a9.736 9.736 0 0 1 .009.955V13.93a1 1 0 0 0 1.993.141L14.989 14l.997.071v-.011l.002-.021.003-.072a11.753 11.753 0 0 0-.013-1.12 10.94 10.94 0 0 0-.475-2.653c-.314-.978-.842-2.03-1.741-2.842C12.842 6.52 11.6 6 9.992 6h-6.58l3.29-3.293Z" />
  </svg>
);
export default SvgReply;
