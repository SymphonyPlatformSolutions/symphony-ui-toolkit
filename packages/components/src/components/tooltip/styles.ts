import { css } from '@emotion/react';

export const styles = {
  parent: css({
    '&:hover [data-css="tooltip"]': {
      transition: 'visibility 10s ease',
      visibility: 'visible'
    },
  }),
  tooltip: css({
    visibility: 'hidden'
  })
}