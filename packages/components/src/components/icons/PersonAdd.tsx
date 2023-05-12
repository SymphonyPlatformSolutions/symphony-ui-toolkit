import * as React from 'react';
import { SVGProps } from 'react';
const SvgPersonAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_PERSON-ADD"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M10 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM8 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM13 8a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V8ZM6 10C1.963 10 .534 11.304.133 11.806a.678.678 0 0 0-.133.43V15a1 1 0 0 0 1 1h8v-2H2v-1.193c.117-.075.277-.163.487-.252C3.104 12.29 4.195 12 6 12v-2Z" />
  </svg>
);
export default SvgPersonAdd;
