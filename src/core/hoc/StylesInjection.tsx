import * as React from 'react';
import { StyleSheetManager } from 'styled-components';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import shortid from 'shortid';

interface Props extends Pick<React.HTMLProps<HTMLDivElement>, 'children'> {
  injectionPoint?: HTMLElement | undefined;
}

export const StylesInjection = (props: Props) => {

  // @emotion/cache only accept alpha characters
  shortid.characters('abcdefghijklmnopqrstuvwxyz');

  const emotionCache = createCache({
    key: shortid.generate(),
    container: props.injectionPoint
  });

  return (
    <StyleSheetManager target={props.injectionPoint}>
      <CacheProvider value={emotionCache} >
        {props.children}
      </CacheProvider>
    </StyleSheetManager>
  )
}