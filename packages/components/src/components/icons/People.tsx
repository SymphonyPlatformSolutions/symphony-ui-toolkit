import * as React from 'react';
import { SVGProps } from 'react';
const SvgPeople = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M12 4a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1 12.236c0-.155.036-.309.137-.427C1.564 11.31 3.146 10 8 10c4.854 0 6.436 1.31 6.863 1.81.1.117.137.27.137.426V15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2.764ZM8 12c-3.01 0-4.42.539-5 .867V14h10v-1.133c-.58-.329-1.99-.867-5-.867Z" />
  </svg>
);
export default SvgPeople;
