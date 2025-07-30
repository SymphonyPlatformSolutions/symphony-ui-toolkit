import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_LOCK"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M13 6.308q.502.072.802.13A1.47 1.47 0 0 1 15 7.89v6.22c0 .684-.474 1.317-1.198 1.452-.814.152-2.748.438-5.802.438s-4.988-.286-5.802-.438A1.47 1.47 0 0 1 1 14.11V7.89c0-.684.474-1.317 1.198-1.452q.3-.058.802-.13V5a5 5 0 0 1 10 0zM11 6.1V5a3 3 0 0 0-6 0v1.101C5.838 6.041 6.838 6 8 6s2.162.041 3 .101m-8 7.57c.888.138 2.554.329 5 .329s4.112-.19 5-.33V8.33C12.112 8.19 10.446 8 8 8s-4.112.19-5 .33z" />
  </svg>
);
export default SvgLock;
