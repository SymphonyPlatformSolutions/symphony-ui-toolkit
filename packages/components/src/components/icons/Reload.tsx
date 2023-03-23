import * as React from 'react';
import { SVGProps } from 'react';
const SvgReload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_RELOAD"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M7.5 14a5.5 5.5 0 0 0 4.9-3h2.173A7.5 7.5 0 1 1 14 4.756V2a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.793A5.5 5.5 0 1 0 7.5 14Z" />
  </svg>
);
export default SvgReload;
