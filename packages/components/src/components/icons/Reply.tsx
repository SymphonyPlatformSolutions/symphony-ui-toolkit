import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_REPLY"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M6.702 2.707A1 1 0 0 0 5.29 1.293l-4.996 5a.997.997 0 0 0 .005 1.42l4.991 4.994a.999.999 0 1 0 1.413-1.414L3.412 8h6.58c1.142 0 1.898.355 2.43.836.553.5.93 1.198 1.178 1.97.247.769.348 1.555.384 2.16a10 10 0 0 1 .009.955v.009a1 1 0 0 0 1.993.141L14.989 14l.997.071v-.011l.002-.021.003-.072q.005-.092.008-.253c.003-.212 0-.51-.02-.867a11 11 0 0 0-.476-2.653c-.314-.978-.842-2.03-1.741-2.842C12.842 6.52 11.6 6 9.992 6h-6.58z" />
  </svg>
);
export default SvgReply;
