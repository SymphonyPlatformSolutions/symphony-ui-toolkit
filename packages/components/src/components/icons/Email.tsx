import * as React from 'react';
import { SVGProps } from 'react';
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_EMAIL"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 3.28c0-.458.314-.85.768-.914C1.817 2.218 4.035 2 8 2c3.965 0 6.183.218 7.232.366.454.065.768.456.768.915v9.438c0 .46-.314.85-.768.915C14.183 13.781 11.965 14 8 14c-3.965 0-6.183-.218-7.232-.367C.314 13.57 0 13.178 0 12.72V3.281Zm11.42.784A83.568 83.568 0 0 0 8 4c-1.343 0-2.475.026-3.42.064L8 7.485l3.42-3.42ZM2 4.314v7.451C3.176 11.88 5.094 12 8 12s4.824-.12 6-.235V4.314L8.707 9.607a1 1 0 0 1-1.414 0L2 4.314Z" />
  </svg>
);
export default SvgEmail;
