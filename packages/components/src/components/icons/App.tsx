import * as React from 'react';
import type { SVGProps } from 'react';
const SvgApp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_APP"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 0c.735 0 1.4 0 2 .009V2.01A142 142 0 0 0 8 2c-1.942 0-3.198.004-4.123.129-.867.116-1.139.305-1.291.457s-.34.424-.457 1.291C2.004 4.802 2 6.057 2 8c0 1.942.004 3.198.129 4.123.116.867.305 1.139.457 1.291s.424.34 1.291.457C4.802 13.996 6.057 14 8 14c1.942 0 3.198-.004 4.123-.129.867-.116 1.139-.305 1.291-.457s.34-.424.457-1.291C13.996 11.198 14 9.943 14 8c0-.766 0-1.426-.01-2h2.001C16 6.6 16 7.265 16 8c0 3.771 0 5.657-1.172 6.828S11.771 16 8 16s-5.657 0-6.828-1.172S0 11.771 0 8s0-5.657 1.172-6.828S4.229 0 8 0" />
    <path d="M14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
);
export default SvgApp;
