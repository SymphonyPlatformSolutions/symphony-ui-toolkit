import * as React from 'react';
import { SVGProps } from 'react';
const SvgObjects = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_OBJECTS"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M12 6a4 4 0 0 0-8 0c0 .97.43 1.784 1.15 2.835l.222.32c.197.283.421.604.628.928V10h4v.083c.207-.324.43-.645.628-.929.08-.113.154-.22.222-.32C11.57 7.785 12 6.97 12 6Zm-2.515 5h-2.97c.142.3.272.634.362 1h2.246c.09-.366.22-.7.362-1ZM8 14a1 1 0 0 0 1-1H7a1 1 0 0 0 1 1ZM8 0a6 6 0 0 1 6 6c0 1.814-.94 3.165-1.769 4.353C11.581 11.287 11 12.12 11 13a3 3 0 1 1-6 0c0-.88-.58-1.713-1.231-2.647C2.94 9.165 2 7.814 2 6a6 6 0 0 1 6-6Z" />
  </svg>
);
export default SvgObjects;
