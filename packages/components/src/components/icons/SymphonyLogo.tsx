import * as React from 'react';
import { SVGProps } from 'react';
const SvgSymphonyLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={7} cy={7} r={7} fill="#008EFF" />
    <path
      d="M4.773 8.932c0 .208.12.4.315.504L7 10.456l1.912-1.02a.575.575 0 0 0 .315-.504V7.878L3.5 6.422V3.81c0-.383.215-.797.676-.987.492-.203 1.435-.49 2.824-.49 1.389 0 2.332.287 2.824.49.46.19.676.604.676.987v1.468l-1.273-.324V3.856C8.854 3.712 8.113 3.498 7 3.498c-1.113 0-1.854.214-2.227.358v1.68L10.5 7v1.932c0 .622-.36 1.197-.947 1.51L7.48 11.548a1.031 1.031 0 0 1-.962 0l-2.072-1.106c-.586-.313-.947-.888-.947-1.51V7.866l1.273.3v.766Z"
      fill="#fff"
    />
  </svg>
);
export default SvgSymphonyLogo;
