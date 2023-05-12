import * as React from 'react';
import { SVGProps } from 'react';
const SvgDocumentSharing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_DOCUMENT-SHARING"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M15.707 3.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L12.586 5H10.5A1.5 1.5 0 0 0 9 6.5v3c0 1.5-2 1.5-2 0v-3A3.5 3.5 0 0 1 10.5 3h2.086l-1.293-1.293A1 1 0 1 1 12.707.293l3 3Z" />
    <path d="M14 15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h5v2H4v12h8v-4h2v5Z" />
  </svg>
);
export default SvgDocumentSharing;
