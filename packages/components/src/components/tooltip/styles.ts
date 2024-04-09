import { css } from '@emotion/react';

export const styles = {
  parent: css({
    '&:hover [data-css="tooltip"]': {
      background: 'orange'
    },
    ':hover': {
      background: 'grey',
    }
  }),
  tooltip: css({
    background: 'red',
    // visibility: 'hidden',
  })
}