import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_PICTURE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <path d="M15.232.366c.454.065.768.456.768.915v13.438c0 .46-.314.85-.768.915C14.183 15.782 11.965 16 8 16s-6.183-.218-7.232-.367C.314 15.57 0 15.179 0 14.72V1.281C0 .82.314.43.768.366 1.817.218 4.035 0 8 0s6.183.218 7.232.366M2 2.235v7.86l1.769.177a5.3 5.3 0 0 0 3.576-.934A7.32 7.32 0 0 1 14 8.44V2.235C12.824 2.119 10.906 2 8 2s-4.824.12-6 .235m11.917 8.341a5.32 5.32 0 0 0-5.425.4 7.3 7.3 0 0 1-4.922 1.286L2 12.105v1.66C3.176 13.88 5.094 14 8 14s4.824-.12 6-.235v-3.147z" />
  </svg>
);
export default SvgPicture;
