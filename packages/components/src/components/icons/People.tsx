import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPeople = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_PEOPLE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M12 4a4 4 0 1 0-8 0 4 4 0 0 0 8 0m-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M1 12.236c0-.155.036-.309.137-.427C1.564 11.31 3.146 10 8 10s6.436 1.31 6.863 1.81c.1.117.137.27.137.426V15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zM8 12c-3.01 0-4.42.539-5 .867V14h10v-1.133c-.58-.328-1.99-.867-5-.867" />
  </svg>
);
export default SvgPeople;
