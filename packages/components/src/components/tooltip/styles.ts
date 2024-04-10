import { css } from '@emotion/react';

export const useStyles = (hoverDelay: number) => ({
  parent: css({
    '&:hover [data-css="tooltip"]': {
      display: 'inherit',
      transition: 'display 0s linear',
      transitionDelay: `${hoverDelay}ms`,
    },
  }),
  tooltip: css({
  }),
  tooltipHidden: css({
    display: 'none',
  }),
  tooltipVisible: css({
    display: 'inherit',
  }),
  tooltipHover: css({
    display: 'none',
    transition: 'display 0s linear',
    transitionDelay: '0.1s',
  })
})