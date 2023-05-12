import * as React from 'react';
import { SVGProps } from 'react';
const SvgEmoticon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_EMOTICON"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M6.016 9.25a1 1 0 1 0-1.324 1.5C5.573 11.527 6.732 12 8 12a4.985 4.985 0 0 0 3.308-1.25 1 1 0 0 0-1.324-1.5C9.454 9.719 8.762 10 8 10a2.985 2.985 0 0 1-1.984-.75Z" />
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-2 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0Z" />
  </svg>
);
export default SvgEmoticon;
