import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { customAlphabet } from 'nanoid';

// @emotion/cache only accepts lowercase alpha characters.
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz');

interface Props extends Pick<React.HTMLProps<HTMLDivElement>, 'children'> {
  injectionPoint?: HTMLElement | undefined;
}

export const StylesInjection = (props: Props) => {
  const emotionCache = createCache({
    key: nanoid(),
    container: props.injectionPoint
  });

  return <CacheProvider value={emotionCache} >
    {props.children}
  </CacheProvider>
};
