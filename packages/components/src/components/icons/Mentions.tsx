import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMentions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_MENTIONS"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 8a8 8 0 0 0 8 8 1 1 0 1 0 0-2 6 6 0 1 1 5.659-4h-2.194A4 4 0 1 0 8 12h6.353a.93.93 0 0 0 .847-.51A8 8 0 1 0 0 8m8 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgMentions;
