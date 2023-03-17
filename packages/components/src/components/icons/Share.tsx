import * as React from 'react';
import { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M8.707.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L7 3.414V11a1 1 0 1 0 2 0V3.414l2.293 2.293a1 1 0 1 0 1.414-1.414l-4-4Z" />
    <path d="M15 16a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v4H2v-4a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h14Z" />
  </svg>
);
export default SvgShare;
