import * as React from 'react';
import { SVGProps } from 'react';
const SvgBot = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M6 9a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1ZM9 10a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Z" />
    <path d="M9 3.732a2 2 0 1 0-2 0V5H6a5 5 0 0 0-5 5v4.72c0 .458.313.852.766.922C2.72 15.79 5.085 16 8 16s5.28-.21 6.234-.358c.453-.07.766-.464.766-.923V10a5 5 0 0 0-5-5H9V3.732ZM3 10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3.787c-.986.108-2.97.213-5 .213s-4.014-.105-5-.213V10Z" />
  </svg>
);
export default SvgBot;
