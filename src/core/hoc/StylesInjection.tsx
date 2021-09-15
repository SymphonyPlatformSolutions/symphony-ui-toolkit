import * as React from 'react';
import { StyleSheetManager } from 'styled-components';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { customAlphabet } from 'nanoid';

interface Props extends Pick<React.HTMLProps<HTMLDivElement>, 'children'> {
    injectionPoint?: HTMLElement | undefined;
}

export const StylesInjection = (props: Props) => {

  // @emotion/cache only accept alpha characters
  const generateUniqueAlphaCharacter = customAlphabet('abcdefghijklmnopqrstuvwxyz', 16);

  const emotionCache = createCache({
    key: generateUniqueAlphaCharacter(),
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