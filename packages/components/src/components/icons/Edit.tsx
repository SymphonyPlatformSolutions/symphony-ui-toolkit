import * as React from 'react';
import { SVGProps } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_EDIT"
    width="1em"
    height="1em"
    viewBox="0 0 16 17"
    {...props}
  >
    <path d="m12.858 3.82-.34-.34-.34-.34-4.742 4.74-4.742 4.74-.1.44-.1.44.44-.1.44-.1 4.742-4.74 4.742-4.74ZM4.396 15.11l-1.901.44-1.891.44a.496.496 0 0 1-.46-.13.496.496 0 0 1-.13-.46l.44-1.89.44-1.89 5.442-5.44L11.778.74c.47-.5 1.1-.74 1.74-.74.631 0 1.271.24 1.752.73.49.48.73 1.12.73 1.75 0 .63-.24 1.27-.73 1.75L9.827 9.67l-5.432 5.44Z" />
  </svg>
);
export default SvgEdit;
