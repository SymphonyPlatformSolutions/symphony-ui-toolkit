import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEmoticon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_EMOTICON"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M6.016 9.25a1 1 0 1 0-1.324 1.5C5.573 11.527 6.732 12 8 12a4.99 4.99 0 0 0 3.308-1.25 1 1 0 0 0-1.324-1.5C9.454 9.719 8.762 10 8 10a2.99 2.99 0 0 1-1.984-.75" />
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-2 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0" />
  </svg>
);
export default SvgEmoticon;
