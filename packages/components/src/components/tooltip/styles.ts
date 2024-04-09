import { css } from '@emotion/react';

export const useStyles = (hoverDelay: number) => ({
  parent: css({
    '&:hover [data-css="tooltip"]': {
      transition: 'visibility 0s linear',
      transitionDelay: `${hoverDelay}ms`,
      visibility: 'visible'
    },
  }),
  tooltipHidden: css({
    visibility: 'hidden'    
  }),
  tooltipVisible: css({
    visibility: 'visible'
  }),
  tooltipClick: css({
    visibility: 'visible',
  }),
  tooltipHover: css({
    transition: 'visibility 0s linear',
    transitionDelay: '0.1s',
    visibility: 'hidden'
  })
})