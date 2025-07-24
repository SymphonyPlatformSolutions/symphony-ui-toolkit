import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_HIGHLIGHT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M5.5 1.5 4.958 5h-.051L2 10v6h2v-4h8v4h2v-6l-3.37-4.927L10 0zM12 10H4l1.75-3h4z" />
  </svg>
);
export default SvgHighlight;
