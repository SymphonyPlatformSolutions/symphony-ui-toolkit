import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_HELP"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 12.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M10.64 4.344a2.687 2.687 0 0 0-3.67-.984l-1.481.855a.977.977 0 1 0 .977 1.693l1.48-.855a.733.733 0 0 1 .733 1.269l-1.48.855a.977.977 0 0 0 .976 1.692l1.481-.855a2.687 2.687 0 0 0 .983-3.67" />
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-2 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0" />
  </svg>
);
export default SvgHelp;
