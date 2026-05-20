import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import * as React from 'react';

/**
 * @param alphabet - The alphabet to use for generating the string (default: lowercase a-z)
 * @returns A string containing only characters from the provided alphabet
 * @description Generates a unique string using the alphabetic characters passed.
 */
const uuidAlpha = (alphabet = 'abcdefghijklmnopqrstuvwxyz') => {
  const base = alphabet.length;
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => alphabet[byte % base]).join('');
};

interface Props extends Pick<React.HTMLProps<HTMLDivElement>, 'children'> {
  injectionPoint?: HTMLElement | undefined;
}

export const StylesInjection = (props: Props) => {
  const emotionCache = createCache({
    container: props.injectionPoint,
    key: uuidAlpha(),
    stylisPlugins: [],
  });

  return <CacheProvider value={emotionCache}>{props.children}</CacheProvider>;
};
