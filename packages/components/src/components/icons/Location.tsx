import * as React from 'react';
import { SVGProps } from 'react';
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_LOCATION"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M10.5 5.994C10.5 7.373 9.38 8.49 8 8.49S5.5 7.373 5.5 5.994c0-1.38 1.12-2.498 2.5-2.498s2.5 1.118 2.5 2.498Zm-2 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z" />
    <path d="M14 5.994A5.997 5.997 0 0 0 8 0C4.686 0 2 2.683 2 5.994c0 4.865 3.953 8.578 5.442 9.804.327.27.789.27 1.116 0C10.047 14.572 14 10.858 14 5.994Zm-2 0c0 2.321-1.17 4.37-2.519 5.942-.518.604-1.04 1.234-1.481 1.624-.441-.39-.963-1.02-1.481-1.624C5.169 10.364 4 8.316 4 5.994a3.998 3.998 0 0 1 4-3.996c2.21 0 4 1.789 4 3.996Z" />
  </svg>
);
export default SvgLocation;
