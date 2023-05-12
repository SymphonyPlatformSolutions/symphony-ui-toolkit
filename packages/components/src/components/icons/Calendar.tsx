import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_CALENDAR"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3 1a1 1 0 1 1 2 0v1.047C5.865 2.018 6.86 2 8 2s2.135.018 3 .047V1a1 1 0 1 1 2 0v1.147c1.026.07 1.752.152 2.232.22.454.064.768.455.768.914v11.438c0 .46-.314.85-.768.915C14.184 15.781 11.965 16 8 16c-3.965 0-6.183-.218-7.232-.367C.314 15.57 0 15.178 0 14.72V3.281c0-.46.314-.85.768-.915.48-.067 1.206-.15 2.232-.22V1Zm11 12.765V7H2v6.765C3.176 13.88 5.094 14 8 14s4.824-.12 6-.235ZM4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
  </svg>
);
export default SvgCalendar;
