import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

interface Props extends Pick<React.HTMLProps<HTMLDivElement>, 'children'> {
  injectionPoint?: HTMLElement | undefined;
}

export const StylesInjection = (props: Props) => {

  // @emotion/cache only accept alpha characters
  // Don't use shortid because it doesn't support less than 64 unique characters (See https://github.com/dylang/shortid#shortidcharactersstring)
  // Later we will use nanoid
  const uniqueAlphaCharacterId = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 10);

  const emotionCache = createCache({
    key: uniqueAlphaCharacterId,
    container: props.injectionPoint
  });

  return (
    <CacheProvider value={emotionCache} >
      {props.children}
    </CacheProvider>
  )
};
