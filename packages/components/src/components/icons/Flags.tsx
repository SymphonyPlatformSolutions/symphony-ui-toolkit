import * as React from 'react';
import { SVGProps } from 'react';
const SvgFlags = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_FLAGS"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2 0a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0v-3.617l1.641-.205a7 7 0 0 1 2.566.155l1.1.275a8.998 8.998 0 0 0 3.3.199l2.517-.315A1 1 0 0 0 15 10.5v-8a1 1 0 0 0-1.124-.992l-2.517.314a7 7 0 0 1-2.566-.155l-1.1-.275a9 9 0 0 0-3.3-.199L3 1.367V1a1 1 0 0 0-1-1Zm1 3.383 1.641-.205a7 7 0 0 1 2.566.155l1.1.275a9 9 0 0 0 3.3.199L13 3.633v5.984l-1.641.205a7 7 0 0 1-2.566-.155l-1.1-.275a9 9 0 0 0-3.3-.199L3 9.367V3.383Z" />
  </svg>
);
export default SvgFlags;
