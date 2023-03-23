import * as React from 'react';
import { SVGProps } from 'react';
const SvgVeryImportant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_VERY-IMPORTANT"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2.5 0a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1ZM2.5 13.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM8 0a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1ZM8 13.5A1.25 1.25 0 1 0 8 16a1.25 1.25 0 0 0 0-2.5ZM12.5 1a1 1 0 1 1 2 0v9a1 1 0 1 1-2 0V1ZM12.25 14.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" />
  </svg>
);
export default SvgVeryImportant;
