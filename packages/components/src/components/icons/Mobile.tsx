import * as React from 'react';
import { SVGProps } from 'react';
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_MOBILE"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M12.5 0A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-13A1.5 1.5 0 0 1 3.5 0h9ZM5.194 2H4v12h8V2h-1.194a.5.5 0 0 0-.481.363l-.118.412a1 1 0 0 1-.961.725H6.754a1 1 0 0 1-.961-.725l-.118-.412A.5.5 0 0 0 5.195 2Z" />
  </svg>
);
export default SvgMobile;
