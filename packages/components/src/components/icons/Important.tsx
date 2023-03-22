import * as React from 'react';
import { SVGProps } from 'react';
const SvgImportant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_IMPORTANT"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 0a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1ZM8 13.5A1.25 1.25 0 1 0 8 16a1.25 1.25 0 0 0 0-2.5Z" />
  </svg>
);
export default SvgImportant;
