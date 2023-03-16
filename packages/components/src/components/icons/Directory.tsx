import * as React from 'react';
import { SVGProps } from 'react';
const SvgDirectory = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M9 0C3.167 0 2 1 2 1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 1 0 0 2h1v2s1.167 1 7 1 7-1 7-1V1s-1.167-1-7-1ZM4 13h1a1 1 0 1 0 0-2H4V9h1a1 1 0 1 0 0-2H4V5h1a1 1 0 0 0 0-2H4v-.606C4.868 2.204 6.412 2 9 2s4.132.205 5 .394v11.212c-.868.19-2.412.394-5 .394s-4.132-.205-5-.394V13Z" />
  </svg>
);
export default SvgDirectory;
