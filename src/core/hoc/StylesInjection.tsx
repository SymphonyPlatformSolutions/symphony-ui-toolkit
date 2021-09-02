import * as React from 'react';
import { StyleSheetManager } from 'styled-components';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

interface Props extends React.HTMLProps<HTMLDivElement> {
    id: string;
    injectionPoint?: HTMLElement | undefined;
}

export const StylesInjection = (props: Props) => {

  const emotionCache = createCache({
    key: props.id,
    container: props.injectionPoint
  });

  return (
    <StyleSheetManager target={ props.injectionPoint }>
      <CacheProvider value={ emotionCache } >
        { props.children }
      </CacheProvider>
    </StyleSheetManager>
  )
}