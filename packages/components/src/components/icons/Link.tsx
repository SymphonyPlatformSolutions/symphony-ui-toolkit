import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_LINK"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="m13.121 7.122-.057.057c.278.781.413 1.603.405 2.423l1.067-1.066a5 5 0 0 0-7.072-7.071L5.996 2.933a5 5 0 0 0 2.808 8.483 3 3 0 0 1-.213.236l-1.466 1.466a3 3 0 1 1-4.243-4.243l.055-.054a7 7 0 0 1-.405-2.424L1.468 7.461a5 5 0 1 0 7.071 7.07l1.466-1.465a5 5 0 0 0 1.183-1.879 5.01 5.01 0 0 0-1.183-5.192 4.98 4.98 0 0 0-2.808-1.411q.099-.122.213-.237L8.88 2.88a3 3 0 1 1 4.242 4.243m-6.589-.59a3 3 0 0 1 2.059.877c.57.57.862 1.312.878 2.059A3 3 0 0 1 7.41 8.59a3 3 0 0 1-.878-2.059" />
  </svg>
);
export default SvgLink;
