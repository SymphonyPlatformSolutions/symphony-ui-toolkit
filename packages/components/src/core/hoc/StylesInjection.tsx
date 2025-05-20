import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a UUID-like string using only alphabetic characters
 * @param alphabet - The alphabet to use for generating the string (default: lowercase a-z)
 * @returns A string containing only characters from the provided alphabet
 * @description Converts a standard UUID into an alphabetic string by mapping bytes to alphabet indices
 */
const uuidAlpha = (alphabet = 'abcdefghijklmnopqrstuvwxyz') => {
  let alpha = '';
  const base = alphabet.length;

  for (let j = 0; j < 5; j++) { // repeat 5 times to get a final id with 20 chars (5 * 4)
    const bytes = Buffer.from(uuidv4(), 'hex');
    for (let i = 0; i < bytes.length; i++) {
      const byte = bytes[i];
      alpha += alphabet[byte % base];
    }
  }

  return alpha;
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
