import styled from 'styled-components';

export const PopperContainer = styled.div`
  &-enter {
    opacity: 0;
    &-active {
      opacity: 1;
      transition: opacity 200ms;
    }
  }
  &-exit {
    opacity: 1;
    &-active {
      opacity: 0;
      transition: opacity 200ms;
    }
  }
`

export const popperProps = {
  appear: true,
  mountOnEnter: true,
  unmountOnExit: true,
}
