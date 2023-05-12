import * as React from 'react';
import { SVGProps } from 'react';
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_FOLDER"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 3a2 2 0 0 1 2-2h4.586A2 2 0 0 1 8 1.586L10.414 4H14a2 2 0 0 1 2 2v7.72c0 .458-.314.85-.768.913C14.183 14.782 11.965 15 8 15c-3.965 0-6.183-.218-7.232-.367C.314 14.57 0 14.178 0 13.72V3Zm2 9.765C3.176 12.88 5.094 13 8 13s4.824-.12 6-.235V6h-3.586A2 2 0 0 1 9 5.414L6.586 3H2v9.765Z" />
  </svg>
);
export default SvgFolder;
